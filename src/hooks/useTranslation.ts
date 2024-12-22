// import { TranslateTextInput, TranslateTextResponse } from '@/data/types';
// import { OpenAI } from 'openai';
// import { useMutation } from '@tanstack/react-query';

// const openai = new OpenAI({
//     apiKey: import.meta.env.VITE_OPENAI_API_KEY, 
//   });

// export const useTranslate = () => {
//     return useMutation<TranslateTextResponse, Error, TranslateTextInput>({
//       mutationFn: async ({ text, targetLanguage }) => {

//         const completion = await openai.chat.completions.create({
//           model: 'gpt-4', 
//           messages: [
//             { role: 'system', content: `You are a helpful assistant that translates text.` },
//             {
//               role: 'user',
//               content: `Translate the following text to ${targetLanguage}: "${text}"`,
//             },
//           ],
//         });
  
//         const translatedText = completion?.choices[0]?.message?.content?.trim();
//         if (!translatedText) {
//           throw new Error('Translation failed: No text returned');
//         }
  
//         return { translatedText };
//       },
//     });
//   };