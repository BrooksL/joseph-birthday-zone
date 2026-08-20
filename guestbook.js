/* ============================================================
   GUESTBOOK ENTRIES

   >>> PLACEHOLDER DATA — lifted from the design handoff. <<<
   Higher-quality names / messages / pictures are coming. To swap:

     1. drop the new PNGs in assets/cards/
     2. replace the array below
     3. commit + push. No HTML or CSS changes needed.

   Fields:
     name     link text (required)
     time     shown after "//" (required)
     msg      one-liner (optional — omit it and the card stands alone)
     img      path to the card, or null
     w        display width in px — the handoff used 240 or 280
     missing  shown inline instead of an image when img is null

   Please downscale new cards to ~560px wide before committing;
   the handoff PNGs are ~1000px and the folder is already 3 MB.
   ============================================================ */

window.GUESTBOOK_ENTRIES = [
  {
    name: 'chris_durheim',
    time: '3:07 PM',
    msg: 'inspired by the concept of "what would the features I ship look like without Joseph." made WITHOUT AI. (it is 1999. there is no AI.)',
    img: 'assets/cards/durheim.png',
    alt: 'card from chris',
    w: 280,
  },
  {
    name: 'beth (eng ops)',
    time: '3:09 PM',
    msg: 'HBD (1).png',
    img: 'assets/cards/beth-hbd.png',
    alt: 'card from beth',
    w: 280,
  },
  {
    // Copy below is a first draft in the house voice; edit freely.
    name: 'beth (eng ops)',
    time: '3:11 PM',
    msg: 'yay baseball. also a tree, and the checkmark. she gets you.',
    img: 'assets/cards/beth-yay-baseball.png',
    alt: 'second card from beth',
    w: 280,
  },
  {
    name: 'brendon',
    time: '3:09 PM',
    msg: 'finger guns. it’s your birthday.',
    img: 'assets/cards/brendon.png',
    alt: 'card from brendon',
    w: 280,
  },
  {
    name: 'taylor',
    time: '3:13 PM',
    msg: 'HAPPY BIRTHDAY JOSEP H (ran out of room)',
    img: 'assets/cards/taylor.png',
    alt: 'card from taylor',
    w: 280,
  },
  {
    name: 'katie',
    time: '3:23 PM',
    msg: 'IT IS YOUR BIRTHDAY. yay baseball! the purple chicken is load-bearing',
    img: 'assets/cards/katie.png',
    alt: 'card from katie',
    w: 280,
  },
  {
    // Her real card turned up, so the failed-load gag is retired. To bring it
    // back: set img to null and restore the `missing` line below.
    //   missing: '[image failed to load: attachment.pl?id=40]',
    name: 'aimee (your PM)',
    time: '6:01 PM',
    msg: 'yay fastballs!! go braves!! this guestbook entry counts as a 1:1',
    img: 'assets/cards/aimee.png',
    alt: 'card from aimee',
    w: 280,
  },
  {
    name: 'jennie',
    time: '8:00 AM',
    msg: 'you, holding a Check-Ins flower and a Groups flower. do not ask why',
    img: 'assets/cards/jennie.png',
    alt: 'card from jennie',
    w: 280,
  },
  {
    name: 'deloris',
    time: '8:21 AM',
    msg: 'BALLOONS. also a chicken in a Braves hat. you’re welcome',
    img: 'assets/cards/deloris.png',
    alt: 'card from deloris',
    w: 280,
  },
  {
    name: 'mike (#9)',
    time: '9:47 AM',
    msg: 'thanks for being awesome! still #9. still salty. :-)',
    img: 'assets/cards/mike.png',
    alt: 'card from mike',
    w: 280,
  },
  {
    // Tim — PM on Groups, the other team Joseph works with. Copy below is a
    // first draft in the house voice; edit freely.
    name: 'tim (groups)',
    time: '10:02 AM',
    img: 'assets/cards/tim-ransom.png',
    alt: 'ransom-note card from tim',
    w: 240,
  },
  {
    name: 'tim (groups)',
    time: '10:04 AM',
    msg: 'Happ Birthday. hope your day is yay!',
    img: 'assets/cards/tim-yay.png',
    alt: 'second card from tim',
    w: 280,
  },
  {
    // Noah — full-stack on Groups. Copy is a first draft; cut it like Tim's if you'd rather.
    name: 'noah (groups)',
    time: '10:11 AM',
    msg: 'a real card. real paper. real pen. show-off.',
    img: 'assets/cards/noah.png',
    alt: 'card from noah',
    w: 280,
  },
  {
    // Sumi — services team, was on Check-Ins until recently.
    name: 'sumi (services)',
    time: '10:19 AM',
    msg: 'live long and prosper... eat cake',
    img: 'assets/cards/sumi.png',
    alt: 'card from sumi',
    w: 240,
  },
  {
    // Dave — Joseph's manager. Copy is a first draft; edit freely.
    name: 'dave (the boss)',
    time: '10:26 AM',
    msg: 'WordArt. rainbow gradient. an eagle. a cow in a space helmet. this is the only card here that actually belongs on this website',
    img: 'assets/cards/dave.png',
    alt: 'card from dave',
    w: 280,
  },
  {
    // No msg — the haiku is the message.
    name: 'lee',
    time: '10:31 AM',
    img: 'assets/cards/lee.png',
    alt: 'birthday haiku from lee',
    w: 280,
  },
];
