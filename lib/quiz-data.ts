export type PersonalityType = 'green-flag' | 'red-flag' | 'narcissist' | 'pick-me' | 'main-character' | 'unhinged';

export interface PersonalityResult {
  type: PersonalityType;
  emoji: string;
  title: string;
  roast: string;
  color: string;
}

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'How do you act when someone ignores you?',
    answers: [
      { text: 'I assume they\'re busy and move on', score: { 'green-flag': 2 } },
      { text: 'I immediately text them again... aggressively', score: { 'red-flag': 2, 'pick-me': 1 } },
      { text: 'I act like I don\'t care but I\'m secretly hurt', score: { 'unhinged': 1, 'pick-me': 2 } },
      { text: 'Honestly? I don\'t even notice', score: { 'narcissist': 2, 'main-character': 1 } },
      { text: 'I spiral and compose 10 different apology messages', score: { 'pick-me': 3 } },
    ],
  },
  {
    id: 2,
    question: 'Do you apologize first even when you\'re not wrong?',
    answers: [
      { text: 'Always, I\'m conflict-avoidant AF', score: { 'pick-me': 3, 'green-flag': 1 } },
      { text: 'Never. I know I\'m right', score: { 'narcissist': 2, 'main-character': 2 } },
      { text: 'Only if I actually caused a problem', score: { 'green-flag': 3 } },
      { text: 'I apologize then immediately blame them back', score: { 'red-flag': 2, 'unhinged': 1 } },
      { text: 'Apologize? Why would I do that?', score: { 'narcissist': 3 } },
    ],
  },
  {
    id: 3,
    question: 'How do you treat waiters/service people?',
    answers: [
      { text: 'With respect and kindness, always', score: { 'green-flag': 3 } },
      { text: 'They\'re servants. Be nice but firm', score: { 'narcissist': 2, 'red-flag': 1 } },
      { text: 'I\'m extra nice to compensate for my anxiety', score: { 'pick-me': 2 } },
      { text: 'Depends on how they serve me', score: { 'main-character': 2 } },
      { text: 'I joke with them like we\'re best friends, even if they\'re uncomfortable', score: { 'unhinged': 2, 'red-flag': 1 } },
      { text: 'I don\'t see them as people, just NPCs', score: { 'narcissist': 3, 'red-flag': 1 } },
    ],  
  },
  {
    id: 4,
    question: 'What do you do when a friend cancels plans?',
    answers: [
      { text: 'No worries, I\'ll reschedule', score: { 'green-flag': 3 } },
      { text: 'I rage internally and ghost them for a week', score: { 'red-flag': 2, 'unhinged': 1 } },
      { text: 'I say it\'s fine but bring it up in every future argument', score: { 'pick-me': 1, 'red-flag': 2 } },
      { text: 'I\'m already making other plans—they\'re the ones missing out', score: { 'main-character': 2, 'narcissist': 1 } },
      { text: 'I assume I did something wrong and blame myself', score: { 'pick-me': 3 } },
      { text: 'I show up anyway and make it their problem', score: { 'unhinged': 3 } },
    ],
  },
  {
    id: 5,
    question: 'Your situationship posts a thirst trap — you?',
    answers: [
      { text: 'Double tap and move on with my day', score: { 'green-flag': 2, 'main-character': 1 } },
      { text: 'Like it, DM them immediately, maybe send a selfie too', score: { 'pick-me': 3 } },
      { text: 'Ignore it to seem uninterested', score: { 'red-flag': 2, 'main-character': 1 } },
      { text: 'Post a hotter thirst trap of myself right after', score: { 'narcissist': 2, 'main-character': 3 } },
      { text: 'Comment something flirty but also slightly mean', score: { 'unhinged': 2, 'red-flag': 1 } },
      { text: 'Hate-like it while fuming', score: { 'unhinged': 2 } },
    ],
  },
  {
    id: 6,
    question: 'How do you handle being wrong in an argument?',
    answers: [
      { text: 'I admit it immediately and apologize', score: { 'green-flag': 3 } },
      { text: 'I double down until they give up', score: { 'narcissist': 3 } },
      { text: 'I change the subject and hope they forget', score: { 'red-flag': 2, 'unhinged': 1 } },
      { text: 'I cry so they feel bad for me', score: { 'pick-me': 3 } },
      { text: 'I make it about my feelings instead', score: { 'main-character': 2 } },
      { text: 'I start a new argument about something unrelated', score: { 'unhinged': 3 } },
    ],
  },
  {
    id: 7,
    question: 'What is your texting style?',
    answers: [
      { text: 'I respond when I can, no pressure', score: { 'green-flag': 3 } },
      { text: 'I leave people on read for power', score: { 'narcissist': 2, 'red-flag': 2 } },
      { text: 'I triple text if no reply in 10 mins', score: { 'pick-me': 3 } },
      { text: 'I send unhinged voice notes at 2am', score: { 'unhinged': 3 } },
      { text: 'I reply with one word to seem mysterious', score: { 'main-character': 2, 'red-flag': 1 } },
      { text: 'I write essays and then delete them and say "lol"', score: { 'pick-me': 2, 'unhinged': 1 } },
    ],
  },
  {
    id: 8,
    question: 'How do you act at a party where you know no one?',
    answers: [
      { text: 'I introduce myself and make friends easily', score: { 'green-flag': 2, 'main-character': 1 } },
      { text: 'I own the room immediately', score: { 'narcissist': 2, 'main-character': 2 } },
      { text: 'I stay on my phone and pray someone talks to me', score: { 'pick-me': 2 } },
      { text: 'I leave after 10 minutes', score: { 'green-flag': 1 } },
      { text: 'I become the chaos the party needed', score: { 'unhinged': 3 } },
      { text: 'I find the host and make it weird for them', score: { 'red-flag': 2, 'unhinged': 1 } },
    ],
  },
  {
    id: 9,
    question: 'Your ex texts "I miss you" — you?',
    answers: [
      { text: 'Ignore it, that chapter is closed', score: { 'green-flag': 3 } },
      { text: 'Reply immediately with "I miss you too"', score: { 'pick-me': 3 } },
      { text: 'Leave on read for 3 days then reply "lol who is this"', score: { 'main-character': 3 } },
      { text: 'Reply "you should" with no further context', score: { 'narcissist': 3 } },
      { text: 'Send a thirst trap with no caption', score: { 'unhinged': 2, 'main-character': 1 } },
      { text: 'Screenshot and send to the group chat first', score: { 'unhinged': 2, 'red-flag': 1 } },
    ],
  },
  {
    id: 10,
    question: 'How do you take criticism?',
    answers: [
      { text: 'I take notes and try to improve', score: { 'green-flag': 3 } },
      { text: 'I smile and then cry in the bathroom', score: { 'pick-me': 2, 'unhinged': 1 } },
      { text: 'I immediately criticize them back', score: { 'red-flag': 2, 'narcissist': 1 } },
      { text: 'I pretend to agree then do what I want anyway', score: { 'narcissist': 2, 'main-character': 1 } },
      { text: 'I write a 3 page response in my notes app', score: { 'unhinged': 3 } },
      { text: 'Who asked them though?', score: { 'narcissist': 3 } },
    ],
  },
  {
    id: 11,
    question: 'What is your love language?',
    answers: [
      { text: 'Acts of service — I show up for people', score: { 'green-flag': 3 } },
      { text: 'Words of affirmation — tell me I\'m amazing constantly', score: { 'narcissist': 2, 'pick-me': 1 } },
      { text: 'Physical touch — I need constant reassurance', score: { 'pick-me': 2 } },
      { text: 'Quality time — but only on my schedule', score: { 'main-character': 2, 'narcissist': 1 } },
      { text: 'Chaos — keep me guessing', score: { 'unhinged': 3 } },
      { text: 'Gifts — love is transactional to me', score: { 'red-flag': 2 } },
    ],
  },
  {
    id: 12,
    question: 'Someone subtly shades you in a group chat — you?',
    answers: [
      { text: 'Let it go, not worth the energy', score: { 'green-flag': 3 } },
      { text: 'Clap back immediately with receipts', score: { 'unhinged': 2, 'red-flag': 1 } },
      { text: 'Leave the group chat dramatically', score: { 'red-flag': 2, 'main-character': 1 } },
      { text: 'Pretend I didn\'t see it and stew for weeks', score: { 'pick-me': 2, 'red-flag': 1 } },
      { text: 'Start a separate chat to talk about them', score: { 'unhinged': 2, 'narcissist': 1 } },
      { text: 'Make a vague post about it on my story', score: { 'main-character': 3 } },
    ],
  },
  {
    id: 13,
    question: 'What is your relationship with social media?',
    answers: [
      { text: 'Healthy — I post occasionally and don\'t obsess', score: { 'green-flag': 3 } },
      { text: 'It\'s my highlight reel and I curate it obsessively', score: { 'narcissist': 2, 'main-character': 1 } },
      { text: 'I post for validation and check likes every 5 mins', score: { 'pick-me': 3 } },
      { text: 'I\'m chronically online and proud', score: { 'unhinged': 3 } },
      { text: 'I lurk everyone but post nothing — watching', score: { 'red-flag': 2 } },
      { text: 'I make everything aesthetic for the brand', score: { 'main-character': 3 } },
    ],
  },
  {
    id: 14,
    question: 'How do you handle a friend who vents to you constantly?',
    answers: [
      { text: 'I listen and offer genuine support', score: { 'green-flag': 3 } },
      { text: 'I set boundaries kindly but firmly', score: { 'green-flag': 2 } },
      { text: 'I one-up their problems with mine', score: { 'narcissist': 3 } },
      { text: 'I become their emotional support human 24/7', score: { 'pick-me': 3 } },
      { text: 'I slowly ghost them to avoid the drama', score: { 'red-flag': 2 } },
      { text: 'I make it entertaining by adding chaos to their story', score: { 'unhinged': 2 } },
    ],
  },
  {
    id: 15,
    question: 'What do you do when you\'re upset?',
    answers: [
      { text: 'I communicate how I feel calmly', score: { 'green-flag': 3 } },
      { text: 'I go silent and wait for them to notice', score: { 'red-flag': 2, 'pick-me': 1 } },
      { text: 'I blow up then act like nothing happened', score: { 'unhinged': 3 } },
      { text: 'I make it everyone else\'s problem', score: { 'narcissist': 2, 'red-flag': 1 } },
      { text: 'I post a cryptic story and wait for DMs', score: { 'main-character': 3 } },
      { text: 'I apologize even though they\'re the one who hurt me', score: { 'pick-me': 3 } },
    ],
  },
  {
    id: 16,
    question: 'Your friend group is planning a trip — your role?',
    answers: [
      { text: 'I help organize and make sure everyone\'s happy', score: { 'green-flag': 3 } },
      { text: 'I make all the decisions because my taste is superior', score: { 'narcissist': 3 } },
      { text: 'I agree with everything to avoid conflict', score: { 'pick-me': 3 } },
      { text: 'I suggest the wildest option and somehow win', score: { 'unhinged': 2, 'main-character': 1 } },
      { text: 'I make it about me the whole time', score: { 'main-character': 3 } },
      { text: 'I complain about plans then don\'t offer alternatives', score: { 'red-flag': 3 } },
    ],
  },
  {
    id: 17,
    question: 'How do you react when someone is more successful than you?',
    answers: [
      { text: 'I\'m genuinely happy for them and get inspired', score: { 'green-flag': 3 } },
      { text: 'I secretly plot to outdo them', score: { 'narcissist': 2, 'red-flag': 1 } },
      { text: 'I downplay their success to feel better', score: { 'red-flag': 2, 'narcissist': 1 } },
      { text: 'I make myself their hype person hoping they notice me', score: { 'pick-me': 3 } },
      { text: 'I make it my villain origin story', score: { 'unhinged': 3 } },
      { text: 'I frame my own story as equally iconic', score: { 'main-character': 3 } },
    ],
  },
  {
    id: 18,
    question: 'What is your morning routine?',
    answers: [
      { text: 'Healthy habits, hydration, and gratitude', score: { 'green-flag': 3 } },
      { text: 'Checking my phone before I even open my eyes', score: { 'pick-me': 2, 'unhinged': 1 } },
      { text: 'I don\'t have one, I thrive in chaos', score: { 'unhinged': 3 } },
      { text: 'An elaborate ritual that I film for content', score: { 'main-character': 3 } },
      { text: 'Whatever makes me look productive on social media', score: { 'narcissist': 2 } },
      { text: 'Wake up, choose violence, repeat', score: { 'red-flag': 3 } },
    ],
  },
  {
    id: 19,
    question: 'How do you end a friendship?',
    answers: [
      { text: 'I have an honest conversation about it', score: { 'green-flag': 3 } },
      { text: 'I ghost them slowly until they get the hint', score: { 'red-flag': 3 } },
      { text: 'I start drama so they end it first', score: { 'unhinged': 2, 'red-flag': 1 } },
      { text: 'I never do — I just collect toxic people', score: { 'pick-me': 3 } },
      { text: 'I make a public statement about it', score: { 'main-character': 3 } },
      { text: 'I don\'t — they just stop being useful to me', score: { 'narcissist': 3 } },
    ],
  },
  {
    id: 20,
    question: 'What\'s your toxic trait?',
    answers: [
      { text: 'I don\'t have one (liar)', score: { 'narcissist': 2, 'main-character': 1 } },
      { text: 'I care too much about what people think', score: { 'pick-me': 3 } },
      { text: 'I push people away before they can leave', score: { 'red-flag': 3 } },
      { text: 'I make everything a dramatic event', score: { 'main-character': 3 } },
      { text: 'I am the toxic trait', score: { 'unhinged': 3 } },
      { text: 'I apologize for existing', score: { 'pick-me': 2, 'green-flag': 1 } },
    ],
  },
];

export const PERSONALITY_RESULTS: Record<PersonalityType, PersonalityResult> = {
  'green-flag': {
    type: 'green-flag',
    emoji: '🟢',
    title: 'Green Flag',
    roast: 'Wow, you\'re actually a decent human being. How refreshing. You probably hold doors open and tip well too. We should all aspire to be you, but like... not too much. Leave some room for imperfection, bestie. You\'re literally the friend group\'s therapist at this point. Please charge a fee.',
    color: '#22c55e',
  },
  'red-flag': {
    type: 'red-flag',
    emoji: '🚩',
    title: 'Red Flag',
    roast: 'Oh honey, you\'re a whole parade of red flags. Your therapist needs a therapist after dealing with you. People see you coming and start crossing the street. But hey, at least you\'re self-aware enough to take this quiz? That\'s... something. Your exes probably have a group chat about you. Buckle up, it\'s gonna be a bumpy ride for anyone who knows you.',
    color: '#ef4444',
  },
  'narcissist': {
    type: 'narcissist',
    emoji: '😈',
    title: 'Narcissist',
    roast: 'Main character energy meets villain arc. You\'re the kind of person who thinks the world revolves around you because, in your mind, it literally does. Mirrors are your best friend (next to yourself). You\'ve probably googled "narcissist" before and thought, "Yeah, that sounds right, and what\'s wrong with that?" Your therapist is NOT having it, and neither is anyone who has to sit next to you at dinner. You\'re exhausting.',
    color: '#8b5cf6',
  },
  'pick-me': {
    type: 'pick-me',
    emoji: '🤡',
    title: 'Pick Me',
    roast: 'Girl, the constant need for validation is LOUD. You\'re out here doing the most to get approval from people who barely know your middle name. Your apologies come with apologies. You bend over backwards so much you\'re basically a pretzel. Newsflash: Being yourself (even if you\'re annoying) is more attractive than this desperate energy. Please touch grass and realize you don\'t need everyone to like you.',
    color: '#f59e0b',
  },
  'main-character': {
    type: 'main-character',
    emoji: '👑',
    title: 'Main Character',
    roast: 'You walk into a room like you own it, and honestly? People let you. You\'ve got charisma for days, but also the slight self-absorbed streak that comes with it. You\'re the protagonist of your own story, and everyone else is just supporting cast. It\'s giving main character energy, which is iconic until it\'s... not. You inspire people, but you also exhaust them. Your confidence is your superpower, but it\'s also your kryptonite. Keep it cute.',
    color: '#fbbf24',
  },
  'unhinged': {
    type: 'unhinged',
    emoji: '💀',
    title: 'Unhinged',
    roast: 'Okay, you\'re absolutely FERAL and we respect it. Your brain doesn\'t have a filter—it\'s more like a strainer at this point. You\'re the friend who says what everyone\'s thinking but shouldn\'t say out loud. Chaos follows you like a loyal puppy. Your therapist has actually stopped taking notes and just watches in horror. People never know what version of you they\'re gonna get, and honestly? It\'s kind of iconic. Don\'t ever change (actually, maybe consider changing a little).',
    color: '#ec4899',
  },
};
export interface Answer {
  text: string;
  score: Partial<Record<PersonalityType, number>>;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export function getRandomQuestions(count: number = 5): Question[] {
  const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function calculatePersonality(
  answers: Record<number, number>,
  questions: Question[] 
): PersonalityType {
  const scores: Record<PersonalityType, number> = {
    'green-flag': 0,
    'red-flag': 0,
    'narcissist': 0,
    'pick-me': 0,
    'main-character': 0,
    'unhinged': 0,
  };

  Object.entries(answers).forEach(([questionId, answerIndex]) => {
    const questionNum = parseInt(questionId);
    const question = questions.find((q) => q.id === questionNum);
    if (question && question.answers[answerIndex]) {
      const answerScores = question.answers[answerIndex].score;
      Object.entries(answerScores).forEach(([type, score]) => {
        scores[type as PersonalityType] += score;
      });
    }
  });

  let maxScore = 0;
  let resultType: PersonalityType = 'green-flag';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type as PersonalityType;
    }
  });

  return resultType;
}

export function getPersonalityResult(type: PersonalityType): PersonalityResult {
  return PERSONALITY_RESULTS[type];
}

export function getAIRoast(type: PersonalityType): string {
  return getPersonalityResult(type).roast;
}