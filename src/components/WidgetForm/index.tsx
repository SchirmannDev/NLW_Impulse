import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedBackTypeSteps } from "./Steps/FeedbackTypeSteep";
import { FeedBackContentSteps } from "./Steps/FeedbackContentSteep";
import { FeedBackSuccessSteps } from "./Steps/FeedbackSuccessSteps";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    },
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balanço de pensamento'
    },
  }
};

export type FeedbackType = keyof typeof feedbackTypes;



export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">


      {feedbackSent ? (
        <FeedBackSuccessSteps onFeedbackRestartRequest={handleRestartFeedback} />
      ) : (

        <>
          {!feedbackType ?
            (
              <FeedBackTypeSteps onFeedbackTypeChange={setFeedbackType} />
            ) : (
              <FeedBackContentSteps
                feedbackType={feedbackType}
                onFeedbackRestartRequest={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            )

          }

        </>
      )}

      <footer className="text-ts text-neutral-400">
        Feito com ❤️ pela <a className="underline underline-offset-2" href="https://www.linkedin.com/in/schirmann/">Cíntia</a>
      </footer>
    </div >
  )
}