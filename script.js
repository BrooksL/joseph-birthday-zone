/* Joseph's Birthday Zone — behavior.
   Ported from the design reference's DCLogic component to plain JS. */

(function () {
  'use strict';

  var zone = document.getElementById('zone-1999');
  var bbs = document.getElementById('bbs-1986');
  var switchBtn = document.getElementById('mode-switch');
  var redial = document.getElementById('redial');
  var sparkleLayer = document.getElementById('sparkles');
  var nowPlaying = document.getElementById('now-playing');
  var partyOverlay = document.getElementById('party-overlay');

  /* ---------------- guestbook ---------------- */

  function renderGuestbook() {
    var host = document.getElementById('guestbook-entries');
    var entries = window.GUESTBOOK_ENTRIES || [];

    entries.forEach(function (entry, i) {
      var row = document.createElement('div');
      row.className = 'gb-entry' + (i === entries.length - 1 ? ' gb-entry--last' : '');

      var link = document.createElement('a');
      link.href = '#';
      link.textContent = entry.name;
      row.appendChild(link);
      row.appendChild(document.createTextNode(' '));

      var time = document.createElement('span');
      time.className = 'gb-time';
      time.textContent = '// ' + entry.time;
      row.appendChild(time);

      // msg is optional — some cards speak for themselves.
      if (entry.msg) {
        row.appendChild(document.createElement('br'));
        row.appendChild(document.createTextNode(entry.msg));
      }

      if (entry.img) {
        row.appendChild(document.createElement('br'));
        var img = document.createElement('img');
        img.src = entry.img;
        img.alt = entry.alt || ('card from ' + entry.name);
        img.style.width = (entry.w || 240) + 'px';
        row.appendChild(img);
      } else if (entry.missing) {
        // Sits inline on the same line as the copy — that is what sells the gag.
        row.appendChild(document.createTextNode(' '));
        var missing = document.createElement('span');
        missing.className = 'gb-missing';
        missing.textContent = entry.missing;
        row.appendChild(missing);
      }

      host.appendChild(row);
    });
  }

  /* ---------------- mode switch ---------------- */

  var LABEL_1999 = '◄ TRAVEL BACK TO 1986';
  var LABEL_1986 = 'FAST-FORWARD TO 1999 ►';
  var mode = '1999';

  function applyMode(next) {
    mode = next;
    var is99 = next === '1999';
    zone.style.display = is99 ? '' : 'none';
    bbs.style.display = is99 ? 'none' : '';
    switchBtn.textContent = is99 ? LABEL_1999 : LABEL_1986;
    switchBtn.className = is99 ? 'switch--1999' : 'switch--1986';
    if (!is99) {
      stopSong();
      setParty(false);
    }
    try {
      localStorage.setItem('birthdayMode', next);
    } catch (e) {
      /* private browsing — the mode just won't persist */
    }
  }

  switchBtn.addEventListener('click', function () {
    var next = mode === '1999' ? '1986' : '1999';
    redial.classList.add('is-on');
    applyMode(next);
    setTimeout(function () {
      redial.classList.remove('is-on');
    }, 150);
  });

  /* ---------------- party mode ---------------- */

  var partyOn = false;

  function setParty(on) {
    partyOn = on;
    partyOverlay.hidden = !on;
  }

  document.getElementById('party-link').addEventListener('click', function (e) {
    e.preventDefault();
    setParty(!partyOn);
  });

  /* ---------------- the "MIDI" ---------------- */

  var ac = null;
  var stopTimer = null;

  var FREQ = {
    G4: 392, A4: 440, B4: 493.88, C5: 523.25,
    D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
  };

  var SONG = [
    ['G4', 0.75], ['G4', 0.25], ['A4', 1], ['G4', 1], ['C5', 1], ['B4', 2],
    ['G4', 0.75], ['G4', 0.25], ['A4', 1], ['G4', 1], ['D5', 1], ['C5', 2],
    ['G4', 0.75], ['G4', 0.25], ['G5', 1], ['E5', 1], ['C5', 1], ['B4', 1], ['A4', 2],
    ['F5', 0.75], ['F5', 0.25], ['E5', 1], ['C5', 1], ['D5', 1], ['C5', 2],
  ];

  function setPlaying(on) {
    nowPlaying.textContent = on ? 'happy_birthday.mid' : 'happy_birthday.mid [ready]';
    nowPlaying.style.animation = on ? 'blink 0.7s step-start infinite' : '';
  }

  function killAudio() {
    if (ac) {
      try { ac.close(); } catch (e) { /* already closed */ }
      ac = null;
    }
    if (stopTimer) {
      clearTimeout(stopTimer);
      stopTimer = null;
    }
  }

  function playSong() {
    killAudio();
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ac = new AC();

    var q = 0.34;
    var t = ac.currentTime + 0.05;

    SONG.forEach(function (note) {
      var osc = ac.createOscillator();
      var gain = ac.createGain();
      osc.type = 'square';
      osc.frequency.value = FREQ[note[0]];
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.12, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + note[1] * q * 0.9);
      osc.connect(gain);
      gain.connect(ac.destination);
      osc.start(t);
      osc.stop(t + note[1] * q);
      t += note[1] * q;
    });

    setPlaying(true);
    stopTimer = setTimeout(function () {
      setPlaying(false);
      ac = null;
    }, (t - ac.currentTime) * 1000 + 200);
  }

  function stopSong() {
    // Closing the context kills every oscillator still scheduled on it.
    killAudio();
    setPlaying(false);
  }

  document.getElementById('btn-play').addEventListener('click', playSong);
  document.getElementById('btn-stop').addEventListener('click', stopSong);

  /* ---------------- sparkle cursor trail (1999 only) ---------------- */

  var SPARKLE_COLORS = ['#FF00FF', '#00FFFF', '#FFFF00', '#FF69B4', '#66FF66'];

  document.addEventListener('mousemove', function (e) {
    if (mode !== '1999') return;
    if (Math.random() < 0.55) return;

    var s = document.createElement('span');
    s.textContent = '*';
    s.style.cssText =
      'position:absolute;left:' + e.clientX + 'px;top:' + e.clientY + 'px;' +
      'pointer-events:none;font:bold ' + (12 + Math.random() * 12) +
      'px "Comic Sans MS",cursive;color:' +
      SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)] +
      ';animation:sparkleFall .8s ease-out forwards;';
    sparkleLayer.appendChild(s);
    setTimeout(function () { s.remove(); }, 850);
  });

  /* ---------------- set dressing ---------------- */

  // Every other link on the page is decoration.
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (a && a.getAttribute('href') === '#') e.preventDefault();
  });

  /* ---------------- boot ---------------- */

  renderGuestbook();

  var saved = null;
  try { saved = localStorage.getItem('birthdayMode'); } catch (e) { /* ignore */ }
  applyMode(saved === '1986' ? '1986' : '1999');
})();
