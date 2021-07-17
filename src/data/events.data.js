import React from 'react';

const Rs = () => <span className='rupee-symbol'>₹</span>;

export const eventsList = [
  {
    code: 'enactus-1',
    name: 'Case Vista'
  },
  {
    code: 'das-1',
    name: 'Anime Quiz'
  },
  {
    code: 'das-2',
    name: 'Lockdown Photojournalism'
  },
  {
    code: 'das-3',
    name: 'Macro Photography'
  },
  {
    code: 'das-4',
    name: 'Light Painting'
  },
  {
    code: 'das-5',
    name: 'Your Best Shot'
  },
  {
    code: 'acm-1',
    name: 'Think and Grow Rich'
  },
  {
    code: 'acm-2',
    name: 'Meme Wars'
  },
  {
    code: 'acm-3',
    name: 'Video Editing'
  },
  {
    code: 'edc-1',
    name: 'Auction Ideathon'
  },
  {
    code: 'edc-2',
    name: 'Binge Mania'
  },
  {
    code: 'edc-3',
    name: 'Business Quiz'
  },
  {
    code: 'aura-1',
    name: 'Solo Dance Competition'
  },
  {
    code: 'isa-1',
    name: 'Ideathon'
  },
  {
    code: 'aagaaz-1',
    name: 'Music Trivia'
  },
  {
    code: 'csi-1',
    name: 'Quizzi-QAL'
  },
  {
    code: 'anon-1',
    name: 'Encore Unplugged - Open Mic Event'
  }
];

export const events = {
  enactus: [
    {
      code: 'enactus-1',
      name: 'Case-Vista',
      date: '4th October',
      team: '3-5 members',
      prize: <>{Rs()} 2000</>,
      registrationFee: 'FREE',
      organisingSociety: 'Enactus',
      registrationLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSflsZYw3nu1SyOMAPGnezoD3wy2mPUMhyESiLSNxoZAwnFJzQ/viewform?usp=sf_link',
      poster: require('../assets/events/case-vista.jpeg').default,
      description: (
        <p>
          Enactus BVCOE is planning to conduct a 'Case-Vista', wherein students
          of various colleges and other Enactus teams can showcase their
          analytical skills and entrepreneurial abilities. The case study will
          entail a real-life situation, the solutions of which shall be
          presented by the different teams. The preliminary round will help us
          find the best teams, who will then be judged based on their skills in
          the second round.
        </p>
      )
    }
  ],
  das: [
    {
      code: 'das-1',
      name: 'Anime Quiz',
      date: '4th October',
      team: '1 member',
      prize: <>{Rs()} 700</>,
      registrationFee: <>{Rs()} 50</>,
      organisingSociety: 'DAS',
      registrationLink: 'https://dare2compete.com/o/4mftLCh',
      poster: require('../assets/events/anime-quiz.jpeg').default,
      description: (
        <div>
          <p>
            Do you know God Of Death Loves Apples? If <b>yes</b>, then this is a
            must event for all of you to participate in!
          </p>
          <p>
            Konnichiwa to all the weebs/otakus out there. For the first time,
            DAS-BVP brings you an 'Anime Quiz' for all of you closet,
            hyperactive and degenerate weebs for the first time ever which is
            going to happen in our college.
          </p>
          <p>
            The quiz has <b>3 rounds</b>:
          </p>
          <ul>
            <li>Normie Kun</li>
            <li>Intermediate Kun</li>
            <li>Otaku Sama</li>
          </ul>
          <p>
            <br />
            <em>
              “When you pick the only option you have to choose from, can you
              really call that your own decision?”{' '}
            </em>
            – Hayato Hayama
          </p>
          <p>
            We are giving you one option. Let the battle royale begin!{' '}
            <b>じゃあね</b>
          </p>
        </div>
      )
    },
    {
      code: 'das-2',
      name: 'Lockdown Photojournalism',
      date: '3rd October',
      team: '1 member',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 300 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (2nd Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (3rd Prize)</span>
        </span>
      ),
      registrationFee: 'FREE',
      organisingSociety: 'DAS',
      registrationLink: 'https://forms.gle/EqcYLnEGEoMoYqjP7',
      poster: require('../assets/events/lockdown-photojournalism.jpeg').default,
      description: (
        <div>
          <p>
            Photographers are always creative with one's shots, so one can also
            be creative in writing about it. Photojournalism employs images to
            tell a news story.
            <br />
            Click a photo depicting lockdown in India and write an article up to
            150 words with your clicked shot as your theme.
          </p>
          <div>
            <p>
              <b>Entry Submission: 3rd October</b>
            </p>
            <ul>
              <li>
                Picture resolution should be greater than 1280 X 720 pixels.
              </li>
              <li>Size should be greater than 2 MB.</li>
              <li>Shot clicked in 2020 would be considered a valid entry.</li>
              <li>Your shot should be original.</li>
              <li>No screenshots are allowed.</li>
              <li>Photo should be creative.</li>
              <li>Article should not exceed 150 words.</li>
              <li>
                Judging will be done based on the photo as well as the article
                so the article should be grammatically sound and should have a
                proper opening and ending.
              </li>
              <li>
                Photo editing is allowed to a little extent (color correction,
                cropping only).
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      code: 'das-3',
      name: 'Macro Photography',
      date: '3rd October',
      team: '1 member',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 300 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (2nd Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (3rd Prize)</span>
        </span>
      ),
      registrationFee: 'FREE',
      organisingSociety: 'DAS',
      registrationLink: 'https://forms.gle/XXRKAUC349yzdhBg9',
      poster: require('../assets/events/macro-photography.jpeg').default,
      description: (
        <div>
          <p>
            If you like taking extreme close-up photography, usually of very
            small subjects or living organisms like insects then this theme is
            just for you.
          </p>
          <p>
            <b>Entry Submission: 3rd October</b>
          </p>
          <ul>
            <li>
              Picture resolution should be greater than 1280 X 720 pixels.
            </li>
            <li>Size should be greater than 2 MB.</li>
            <li>Your shot should be original.</li>
            <li>No screenshots are allowed.</li>
            <li>
              Photo editing is allowed to a little extent (color correction,
              cropping only).
            </li>
            <li>Extra points for providing behind the scenes video.</li>
            <li>Idea should be innovative.</li>
          </ul>
        </div>
      )
    },
    {
      code: 'das-4',
      name: 'Light Painting',
      date: '3rd October',
      team: '1 member',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 300 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (2nd Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (3rd Prize)</span>
        </span>
      ),
      registrationFee: 'FREE',
      organisingSociety: 'DAS',
      registrationLink: 'https://forms.gle/RZ23PDMV52eRE6Q6A',
      poster: require('../assets/events/light-painting.jpeg').default,
      description: (
        <div>
          <p>
            <em>
              Let the world be your canvas <br />
              Aura be the colours <br />
              To bring a scene to life but painting it with a beam of light.
            </em>
          </p>
          <p>
            It's a technique of moving a light source by taking a long exposure
            of the object.
          </p>
          <p>
            <b>Entry Submission: 3rd October</b>
          </p>
          <ul>
            <li>
              Picture resolution should be greater than 1280 X 720 pixels.
            </li>
            <li>Size should be greater than 2 MB.</li>
            <li>Your shot should be original.</li>
            <li>No screenshots are allowed.</li>
            <li>
              Photo editing is allowed to a little extent (color correction,
              cropping only).
            </li>
            <li>Extra points for providing behind the scenes video.</li>
            <li>Idea should be innovative.</li>
          </ul>
        </div>
      )
    },
    {
      code: 'das-5',
      name: 'Your Best Shot',
      date: '3rd October',
      team: '1 member',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 300 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (2nd Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (3rd Prize)</span>
        </span>
      ),
      registrationFee: 'FREE',
      organisingSociety: 'DAS',
      registrationLink: 'https://forms.gle/6w8eL9AoSjxmB1aq5',
      poster: require('../assets/events/your-best-shot.jpeg').default,
      description: (
        <div>
          <p>
            Each of us has a shot clicked just at the right moment and edited
            just the way you like it. Send us your best shot yet as an entry
            which tells what type of photographer you are.
          </p>
          <p>
            <b>Entry Submission: 3rd October</b>
          </p>
          <ul>
            <li>
              Picture resolution should be greater than 1280 X 720 pixels.
            </li>
            <li>Size should be greater than 2 MB.</li>
            <li>Your shot should be original.</li>
            <li>No screenshots are allowed.</li>
            <li>
              Photo editing is allowed to a little extent (color correction,
              cropping only).
            </li>
            <li>Extra points for providing behind the scenes video.</li>
            <li>Idea should be innovative.</li>
          </ul>
        </div>
      )
    }
  ],
  acm: [
    {
      code: 'acm-1',
      name: 'Think and Grow Rich',
      date: '3rd & 4th October',
      team: '4 members',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 1000 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 500 (2nd Prize)</span>
        </span>
      ),
      registrationFee: <>{Rs()} 20</>,
      organisingSociety: 'ACM',
      registrationLink: 'https://forms.gle/YmxeVK1mZLxSxTjr6',
      poster: require('../assets/events/think-grow-rich.jpeg').default,
      description: (
        <p>
          Each team will be given a hypothetical scenario and some fixed amount
          of hypothetical money and they’ll have to think, innovate and
          implement their skills in marketing and business to devise a lucrative
          and feasible business model within a specified amount of time.{' '}
          <b>Appreciation Certificates</b> will also be provided.
        </p>
      )
    },
    {
      code: 'acm-2',
      name: 'Meme Wars',
      date: '3rd October',
      team: '1 member',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 350 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 150 (2nd Prize)</span>
        </span>
      ),
      registrationFee: 'FREE',
      organisingSociety: 'ACM',
      registrationLink: 'https://forms.gle/eHUmbXBEGCwMPJ1n7',
      poster: require('../assets/events/meme-wars.jpeg').default,
      description: (
        <p>
          Each team will have to work to come up with a meme either by making
          their own original meme template or by using an existing one within a
          specified period. The meme that clearly expresses the theme will be
          the winner. <b>Appreciation Certificates</b> will also be provided.
        </p>
      )
    },
    {
      code: 'acm-3',
      name: 'Video Editing Contest',
      date: '4th October',
      team: '3 members',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 700 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 500 (2nd Prize)</span>
        </span>
      ),
      registrationFee: <>{Rs()} 30</>,
      organisingSociety: 'ACM',
      registrationLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSfKmC5_aL8pzukK9Z0cVAjBjpKEchzgW1qVUYWs3O7P-uSkOQ/viewform?usp=sf_link',
      poster: require('../assets/events/video-editing.jpeg').default,
      description: (
        <p>
          Each team must put together a short trailer for a Netflix show/movie
          within a specified amount of time. The genre will be provided on the
          spot. The team that creates most intriguing, imaginative and original
          trailer will be the winner. <b>Appreciation Certificates</b> will also
          be provided.
        </p>
      )
    }
  ],
  edc: [
    {
      code: 'edc-1',
      name: 'Auction Ideathon',
      date: '3rd & 4th October',
      team: '1-3 members',
      prize: <>{Rs()} 1000</>,
      registrationFee: <>{Rs()} 50</>,
      organisingSociety: 'EDC',
      registrationLink: 'https://forms.gle/UTE1U8z8y3SHWSQQ9',
      poster: require('../assets/events/auction-ideathon.jpeg').default,
      description: (
        <p>
          In this event, the students would face preliminary quizzing round in
          which each team will earn virtual money based on every right answer
          and then in the next round they will have to buy a minimum of 2
          companies in the auction with different base values and of depending
          on companies. The final day each team must submit a document before
          their presentation on the meet. They must formulate an idea for the
          company based on the theme given.
        </p>
      )
    },
    {
      code: 'edc-2',
      name: 'Binge Mania',
      date: '3rd October',
      team: '1 member',
      prize: <>{Rs()} 700</>,
      registrationFee: <>{Rs()} 30</>,
      organisingSociety: 'EDC',
      registrationLink: 'https://forms.gle/hTttGVJjNLJN4aPW9',
      poster: require('../assets/events/binge-mania.jpeg').default,
      description: (
        <p>
          In this event, the participants would have to choose the right answer
          in each time frame. The top three rank holder would get the prizes.
        </p>
      )
    },
    {
      code: 'edc-3',
      name: 'Business Quiz',
      date: '4th October',
      team: '1 member',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 400 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 200 (2nd Prize)</span>
          <br />
          <span className='underline'>{Rs()} 100 (3rd Prize)</span>
        </span>
      ),
      registrationFee: <>{Rs()} 30</>,
      organisingSociety: 'EDC',
      registrationLink: 'https://forms.gle/5abGBdi59aFtp3MXA',
      poster: require('../assets/events/business-quiz.jpeg').default,
      description: (
        <p>
          The team would have to guess the company name based on the clue
          (pictures, taglines, news) given within a given time frame. The top
          three rank holders would get the prize.
        </p>
      )
    }
  ],
  aura: [
    {
      code: 'aura-1',
      name: 'RANGMANCH (Solo Dance Competition)',
      date: '3rd October',
      team: '1 member',
      prize: <>{Rs()} 2000</>,
      registrationFee: <>{Rs()} 50</>,
      organisingSociety: 'AURA',
      registrationLink: 'https://forms.gle/g75wdJ8rTWwUtvQeA',
      poster: require('../assets/events/rangmanch.jpeg').default,
      description: (
        <div>
          <p className='sub-heading'>
            <em>Guidelines:</em>
          </p>
          <ul>
            <li>
              The registration starts at 20th September 2020. The last date to
              register is 26th September 2020. The registration fee is Rs 50.
            </li>
            <li>
              Following <b>@aura_dancecrew</b> on Instagram is mandatory. Your
              entries will not be considered if the page is not followed.
            </li>
            <li>
              The videos can be uploaded from 20th to 26th September (11 pm).
            </li>
          </ul>
          <p className='sub-heading'>
            <em>Round 1:</em>
          </p>
          <ul>
            <li>
              Participants shall upload a 1 minute (max) dance video on any song
              and post it on their Instagram account, tag <b>@aura_dancecrew</b>{' '}
              and use <b>#encore2020</b> in their posts.
            </li>
            <li>6 participants will be shortlisted from this round.</li>
          </ul>
          <p className='sub-heading'>
            <em>Round 2:</em>
          </p>
          <ul>
            <li>
              Top 6 selected participants will be given an opponent to battle
              with (3 battles, 3 finalists).
            </li>
            <li>
              The winner will be selected from these 3 finalists by the judge.
            </li>
            <li>Stay tuned to our page for further updates.</li>
          </ul>
        </div>
      )
    }
  ],
  isa: [
    {
      code: 'isa-1',
      name: 'Ideathon',
      date: '3rd October',
      team: '3-4 members',
      prize: (
        <span className='prize-money'>
          <span className='underline'>{Rs()} 1500 (1st Prize)</span>
          <br />
          <span className='underline'>{Rs()} 1000 (2nd Prize)</span>
          <br />
          <span className='underline'>{Rs()} 500 (3rd Prize)</span>
        </span>
      ),
      registrationFee: <>{Rs()} 80</>,
      organisingSociety: 'ISA',
      registrationLink: 'https://dare2compete.com/competitions/info/128582',
      poster: require('../assets/events/ideathon.jpeg').default,
      description: (
        <p>
          There will be 3-4 rounds in which the teams would be given a theme for
          a round (i.e. health, lifestyle etc.) and the time limit will of 3
          hours. In this time the members can think of an innovative idea and
          must prepare a PPT for the same. They also can present some additional
          things like simulation (for hardware) or a prototype for their idea.
          Every round will be judged and some teams will be eliminated after
          each round and the others (selected ones) would qualify for the next
          round.
        </p>
      )
    }
  ],
  aagaaz: [
    {
      code: 'aagaaz-1',
      name: 'Music Trivia',
      date: '3rd & 4th October',
      team: '1-3 members',
      prize: <>{Rs()} 500</>,
      registrationFee: <>{Rs()} 30</>,
      organisingSociety: 'AAGAAZ',
      registrationLink: 'https://forms.gle/Rc6oxExDN4rVQryHA',
      poster: require('../assets/events/music-trivia.jpeg').default,
      description: (
        <p>
          Want to prove you have the best taste in music to your friends while
          also practicing social distancing? All you need to do is (virtually)
          gather your friends and participate in this wonderful music trivia
          presented by AAGAAZ (The Music Society of Bharati Vidyapeeth College
          of Engineering). It will include{' '}
          <b>questions on songs/music videos/albums</b> and the quiz will be
          separated in rounds like{' '}
          <b>guess the song, complete the lyrics & rapid fire</b>. People can
          choose from the categories (like Hollywood, Bollywood, etc.) and can
          participate in teams as well.
        </p>
      )
    }
  ],
  bvpcsi: [
    {
      code: 'csi-1',
      name: 'Quizzi-Qal',
      date: '3rd October',
      team: '1-3 members',
      prize: <>{Rs()} 500</>,
      registrationFee: 'FREE',
      organisingSociety: 'BVPCSI',
      registrationLink: 'https://forms.gle/G9vCpfxZr1KhsqrZ9',
      poster: require('../assets/events/quizzi-qal.jpeg').default,
      description: (
        <div>
          <p>
            For all the enthusiastic quizzers out there, we will organise a fun
            and interesting quiz based on a variety of topics.
          </p>
          <ul>
            <li>
              This is a general quiz that will consist of <b>4 rounds</b> of
              questions from various topics that cover the fields of current
              events, popular culture, entertainment, politics, economics etc.
              Exact nature and total number of questions will be the
              Quizmaster's discretion.
            </li>
            <li>
              The event will last <b>30 minutes</b>. The participants will have
              to complete the quiz within this time. There are no time
              constraints on individual questions. At the end of the 30 minutes,
              the participant which answers the maximum number of questions
              correctly shall be the winner. Similarly second and third
              positions will be awarded.
            </li>
            <li>
              Questions are objective in nature and could follow any format
              (visual, MCQ, fill in the blanks) according to the Quizmaster's
              choice.
            </li>
            <li>
              Each correct answer is given <b>+50 points</b>. There is <b>NO</b>{' '}
              negative marking for incorrectly answered questions.
            </li>
            <li>
              Looking up answers online is heavily discouraged and if evidence
              of the same is found, participant will be disqualified. If anyone
              found attempting the quiz who's name isn't there on the
              registration list, that individual shall be disqualified.
            </li>
            <li>
              Any student currently enrolled in a college or high school
              (classes 10-12) is <b>eligible</b> to participate.
            </li>
            <li>
              Quiz will be held on an online platform. Code of the quiz will be
              shared with the participant using which they have to log in. The
              questions will be there on the platform. Further instructions
              shall be provided before the start of the quiz.
            </li>
            <li>
              Rules are subject to change according to the organiser's
              discretion.
            </li>
          </ul>
          <p className='sub-heading'>
            <b>Time:</b> 5PM Onwards
          </p>
          <p className='sub-heading'>
            <b>Last date to register:</b> 1st October
          </p>
        </div>
      )
    }
  ],
  anon: [
    {
      code: 'anon-1',
      name: 'Encore Unplugged',
      date: '3rd October',
      team: '1 member',
      prize: '',
      registrationFee: <>{Rs()} 50</>,
      organisingSociety: '',
      registrationLink: 'https://forms.gle/qiLZBE1ptkfh3du99',
      poster: require('../assets/events/encore-unplugged.jpeg').default,
      description: (
        <div>
          <p>
            <em>
              “What mental health needs is more sunlight, more candour, and more
              unashamed conversation.”
            </em>{' '}
            – Glenn Close
          </p>
          <p>Namaste, Adaab, Hello!</p>
          <p>
            ENCORE UNPLUGGED - <em>The Online Open Mic Event</em> in
            collaboration with
            <b> Write & Recite</b>, and <b>Lafz</b> wherein you can come up with
            whatever has been eating you up inside and express it all in a go,
            feel the vibes of magical voice voice of
            <b> Radio Mirchi RJ Mehak </b>
            and witness an talk with an author to know how your favorite novels
            come to life!
          </p>
          <p className='sub-heading'>
            <em>Rules & Guidelines:</em>
          </p>
          <ul>
            <li>The event is free of any language barriers.</li>
            <li>All genres/themes are accepted.</li>
            <li>The time limit is 4 + 1 minutes.</li>
            <li>No entry fee for the audience (registration compulsory).</li>
            <li>Bring a friend along to support other performers as well.</li>
          </ul>
          <p>
            <b>Time:</b> 5PM Onwards
          </p>
        </div>
      )
    }
  ]
};
