const commonQuestions = [
  {
    title: 'Basics',
    items: [
      { question: `What is NICA?`, text: `National Interscholastic Cycling Association.  https://nationalmtb.org/  The Rebobs are part of the NorCal NICA League.  https://www.norcalmtb.org/`, },
      {
        question: `How old does my child need to be to participate?`,
        text: `6th-12th grade.`,
      },
      {
        question: `Can my child participate if home schooled?`,
        text: `Absolutely!`,
      },

      {
        question: `Will the Rebobs teach my child how to ride a bike?`,
        text: `No.  Basic riding skill are required. We will teach progressive MTB skills.`,
      },
      {
        question: `What type of bike and equipment does my child need to be on the team?`,
        text: `A mountain bike with at least 26” wheels and good functioning brakes. Helmet, safety glasses, gloves, tire levers, quick link, spare tube, and small multi tool.  We get deals from local bike shops.`,
      },
      { question: `How much does it cost?`, text: `Team dues are $250 for the season.  NICA registration is done through PitZone and is $60, Membership is $40, and races are $55 per race. Races are optional. Team dues cover team jersey, some camping fees, some race food, coaching fees, scholarships, etc.`, },
    ],
  },
  {
    title: 'Practices',
    items: [
      {
        question: `When do you practice?`,
        text: `We have two practices per week.  Saturday 9-12 is our required regular team practice.  Monday 4-??? is optional conditioning practice for kids who want to gain fitness and perform better in races. Conditioning practice is less social with very little stopping.`,
      },
      {
        question: `Are practices and races mandatory?`,
        text: `Yes and no.  Rider involvement in practices is crucial to assure their skills progress with the team.  There’s always exceptions and we’re very flexible. Just a respectful discussion with your head coach is all it takes.  We encourage kids to at least attend a race. Racing is not required. Some kids just want to ride. Racing isn’t about winning. It’s about self-discovery.  Our team places no emphasis on winning, just doing your best.`,
      },
      { question: `What happens if my child gets hurt at practice or at a race?`, text: `We will stop and assess the situation immediately and take appropriate action. There a coach in the back of every ride group called a sweep. Coaches carry radios and many have first aid kits.  All coaches have to complete annual concussion training.  Level 2 coaches and above have CPR and First Aid training (one level 2 or higher are required to be at every practice).  Throughout NICA, coaches are far more likely to get injured at practice than students and that has been true with Rebobs as well.  At races there is EMS on site.  We will call 911 if needed.`, },

    ],
  },
]

const getOnlyItems = () => {
  let arr = []
  commonQuestions.forEach(({ items }) => {
    items.forEach(item => {
      arr.push(item)
    })
  })
  return [...arr]
}

const commonQuestionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ...getOnlyItems().map(({ question, text }) => {
      return {
        '@context': 'https://schema.org',
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `<p>${text}</p>`,
        },
      }
    }),
  ],
}

export { commonQuestions, commonQuestionsJsonLd }
