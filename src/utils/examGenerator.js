import questionBank from '../data/questionBank';

const TOTAL_QUESTIONS = 75;
const QUESTIONS_PER_TOPIC = 5;

export async function generateExam() {
  console.log("Generating exam...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("Starting exam generation");
        const exam = {
          questions: [],
          startTime: new Date(),
        };

        const topics = Object.keys(questionBank);
        console.log("Available topics:", topics);

        if (topics.length === 0) {
          throw new Error("No topics found in question bank");
        }

        let totalAvailableQuestions = 0;
        topics.forEach(topic => {
          totalAvailableQuestions += questionBank[topic].length;
        });

        console.log(`Total available questions: ${totalAvailableQuestions}`);

        if (totalAvailableQuestions < TOTAL_QUESTIONS) {
          console.warn(`Not enough questions available. Using all ${totalAvailableQuestions} questions.`);
        }

        topics.forEach((topic) => {
          const topicQuestions = questionBank[topic];
          if (!topicQuestions || topicQuestions.length === 0) {
            throw new Error(`No questions found for topic: ${topic}`);
          }
          const selectedQuestions = selectRandomQuestions(topicQuestions, Math.min(QUESTIONS_PER_TOPIC, topicQuestions.length));
          exam.questions.push(...selectedQuestions.map(q => ({ ...q, topic })));
        });

        // If we have any remaining questions to reach TOTAL_QUESTIONS, add them randomly
        while (exam.questions.length < Math.min(TOTAL_QUESTIONS, totalAvailableQuestions)) {
          const randomTopic = topics[Math.floor(Math.random() * topics.length)];
          const randomQuestion = selectRandomQuestions(questionBank[randomTopic], 1)[0];
          if (!exam.questions.some(q => q.id === randomQuestion.id)) {
            exam.questions.push({ ...randomQuestion, topic: randomTopic });
          }
        }

        // Shuffle the questions
        exam.questions = shuffleArray(exam.questions);

        console.log("Exam generated successfully");
        resolve(exam);
      } catch (error) {
        console.error("Error in generateExam:", error);
        reject(error);
      }
    }, 0);
  });
}

function selectRandomQuestions(questions, count) {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, count);
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export { selectRandomQuestions };