import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ExamSection: React.FC = () => {
  // Sample questions related to Microprocessor Engineering
  const questions = [
    {
      question: "What is the function of the ALU in a microprocessor?",
      options: [
        "Perform arithmetic and logic operations",
        "Store data temporarily",
        "Control the flow of data",
        "Manage memory access",
      ],
      correctAnswer: "Perform arithmetic and logic operations",
    },
    {
      question: "Which of the following is a 16-bit microprocessor?",
      options: ["8085", "8086", "8051", "80386"],
      correctAnswer: "8086",
    },
    {
      question: "What is the purpose of the flag register in a microprocessor?",
      options: [
        "Store intermediate results",
        "Indicate the status of arithmetic operations",
        "Control the clock speed",
        "Manage I/O operations",
      ],
      correctAnswer: "Indicate the status of arithmetic operations",
    },
    {
      question: "Which addressing mode is used in the instruction MOV A, B?",
      options: ["Immediate", "Direct", "Register", "Indirect"],
      correctAnswer: "Register",
    },
    {
      question: "What is the size of the data bus in the 8086 microprocessor?",
      options: ["8-bit", "16-bit", "32-bit", "64-bit"],
      correctAnswer: "16-bit",
    },
  ];

  // State to store user answers
  const [userAnswers, setUserAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [result, setResult] = useState<{
    score: number;
    feedback: string;
  } | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Handle answer selection
  const handleAnswerChange = (value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = value;
    setUserAnswers(newAnswers);
  };

  // Move to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Move to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Calculate result
  const calculateResult = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score += 1;
      }
    });
    const feedback = `You scored ${score} out of ${questions.length}. ${
      score === questions.length
        ? "Excellent! You have a strong understanding of Microprocessor Engineering."
        : score >= questions.length / 2
        ? "Good job! You have a decent understanding, but there's room for improvement."
        : "You need to study more. Keep practicing!"
    }`;
    setResult({ score, feedback });
  };

  return (
    <>
      <Navbar />

      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: "bold", color: "primary.main" }}
        >
          Microprocessor Engineering Exam (Semester 4)
        </Typography>

        {/* Questions Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <FormControl component="fieldset" sx={{ mb: 4 }}>
              <FormLabel component="legend" sx={{ fontWeight: "bold", mb: 2 }}>
                {`${currentQuestionIndex + 1}. ${
                  questions[currentQuestionIndex].question
                }`}
              </FormLabel>
              <RadioGroup
                value={userAnswers[currentQuestionIndex]}
                onChange={(e) => handleAnswerChange(e.target.value)}
              >
                {questions[currentQuestionIndex].options.map(
                  (option, optionIndex) => (
                    <FormControlLabel
                      key={optionIndex}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  )
                )}
              </RadioGroup>
            </FormControl>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            variant="contained"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            sx={{
              background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
              color: "white",
            }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
            sx={{
              background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
              color: "white",
            }}
          >
            Next
          </Button>
        </Box>

        {/* Submit Button */}
        {currentQuestionIndex === questions.length - 1 && (
          <Button
            variant="contained"
            onClick={calculateResult}
            sx={{
              mt: 2,
              background: "linear-gradient(90deg, #00e5ff, #ff00ff)",
              color: "white",
              width: "100%",
            }}
          >
            Submit
          </Button>
        )}

        {/* Result Section */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                mt: 4,
                p: 3,
                background: "#333",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Your Result:
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {result.feedback}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                Solutions:
              </Typography>
              {questions.map((question, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {`Q${index + 1}: ${question.question}`}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Correct Answer:</strong> {question.correctAnswer}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Your Answer:</strong>{" "}
                    {userAnswers[index] || "Not answered"}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default ExamSection;
