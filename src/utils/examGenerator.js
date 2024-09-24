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

        topics.forEach((topic, index) => {
          console.log(`Processing topic ${index + 1}/${topics.length}: ${topic}`);
          const topicQuestions = questionBank[topic];
          if (!topicQuestions || topicQuestions.length === 0) {
            throw new Error(`No questions found for topic: ${topic}`);
          }
          console.log(`Selecting questions for topic: ${topic}`);
          const selectedQuestions = selectRandomQuestions(topicQuestions, Math.min(QUESTIONS_PER_TOPIC, topicQuestions.length));
          exam.questions.push(...selectedQuestions);
        });

        console.log(`Selected ${exam.questions.length} questions. Adding remaining questions if needed...`);
        // If we have any remaining questions to reach TOTAL_QUESTIONS, add them randomly
        let attempts = 0;
        while (exam.questions.length < Math.min(TOTAL_QUESTIONS, totalAvailableQuestions) && attempts < 1000) {
          const randomTopic = topics[Math.floor(Math.random() * topics.length)];
          const randomQuestion = selectRandomQuestions(questionBank[randomTopic], 1)[0];
          if (!exam.questions.some(q => q.id === randomQuestion.id)) {
            exam.questions.push(randomQuestion);
          }
          attempts++;
        }

        console.log(`Total questions in exam: ${exam.questions.length}`);

        // Shuffle the questions within each topic
        exam.questions = shuffleArrayByTopic(exam.questions);

        console.log("Exam generated successfully");
        resolve(exam);
      } catch (error) {
        console.error("Error in generateExam:", error);
        reject(error);
      }
    }, 0); // Use setTimeout to prevent blocking the main thread
  });
}

function selectRandomQuestions(questions, count) {
  if (!questions || questions.length === 0) {
    throw new Error('No questions available to select from');
  }
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function shuffleArrayByTopic(array) {
  const topics = [...new Set(array.map(q => q.topic))];
  const shuffledArray = [];
  topics.forEach(topic => {
    const topicQuestions = array.filter(q => q.topic === topic);
    shuffledArray.push(...shuffleArray(topicQuestions));
  });
  return shuffledArray;
}

function selectQuestions(totalQuestions) {
  const allQuestions = Object.values(questionBank).flat();
  const shuffledQuestions = shuffleArray(allQuestions);
  return shuffledQuestions.slice(0, totalQuestions);
}

export { selectQuestions };