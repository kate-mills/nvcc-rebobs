const commonQuestions = [
  {
    title: 'Basics',
    items: [
      {
        question: `Who are the Rebobs?`,
        text: `The Rebobs, a Napa Valley Composite Cycling Team, is a NICA-affiliated, 6-12 grade MTB team that competes against high schools from all over California. Starting in 2020, the Napa Valley Composite Cycling Team has been called 'The Rebobs'.`,
      },
    ],
  },
  {
    title: 'Practices',
    items: [
      {
        question: `When does the team practice?`,
        text: `We are a spring sport however our regular season runs December to June. Our team practices start on Saturdays then increase, as the days become longer, to incorporate Wednesdays. This gradual increase in the practices also helps with the obvious overlap in seasonal sports.`,
      },
      {
        question: `Where do you practice?`,
        text: `Skyline Park is our home course, where the majority of practices will take place. We will also incorporate Moore Creek Park and Angwin into our regimen.`,
      },
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

const commonQuestionsJsonLd={
      "@context": "https://schema.org",
      "@type": "FAQPage",
  "mainEntity":[...getOnlyItems().map(({question, text})=> {
    return {
        "@context": "https://schema.org",
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `<p>${text}</p>`,
        },
      }
  }),
  ]
}

export { commonQuestions, commonQuestionsJsonLd }
