import React, { useEffect, useRef, useState } from "react";
import {Box,Paper,Typography,TextField,IconButton,Fab,Avatar,CircularProgress,Tooltip,} from "@mui/material";
import { styled } from "@mui/material/styles";

const ChatWindow = styled(Paper)(({ theme }) => ({
  position: "fixed",
  bottom: 90,
  right: 24,
  width: 370,
  height: 520,
  zIndex: 1500,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: 16,
  boxShadow: "0 8px 35px rgba(0,0,0,0.20)",

  [theme.breakpoints.down("sm")]: {
    right: 12,
    bottom: 82,
    width: "calc(100% - 24px)",
    height: "min(520px, calc(100dvh - 110px))",
  },
}));

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function AskChatAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm AskChat AI. How can I help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading, open]);

  const sendMessage = async (text = input) => {
    const userMessage = text.trim();

    if (!userMessage || loading) return;

    const history = messages
      .filter((msg) =>
        ["user", "assistant"].includes(msg.role)
      )
      .filter((msg, index) => index !== 0 || msg.role !== "assistant")
      .map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to contact AskChat.");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "I couldn't generate a response.",
        },
      ]);

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error.message || "Something went wrong. Please try again.",
        },
      ]);

    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const suggestions = [
    "What can you help me with?",
    "How do I get started?",
    "Explain the application features.",
  ];

  return (
    <>
      <Tooltip title="Chat with AskChat AI">
        <Fab
          onClick={() => setOpen(!open)}
          color="primary"
          aria-label="Open AskChat AI"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 1600,
            width: 60,
            height: 60,
            background: "linear-gradient(135deg, #1976d2, #673ab7)",
            "&:hover": {
              background: "linear-gradient(135deg, #1565c0, #512da8)",
            },
          }}
        >
          <Typography fontSize={27}>
            {open ? "×" : "✦"}
          </Typography>
        </Fab>
      </Tooltip>


      {open && (
        <ChatWindow elevation={8}>


          <Box
            sx={{
              p: 2,
              background: "linear-gradient(135deg, #1976d2, #673ab7)",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Avatar sx={{ bgcolor: "white", color: "#673ab7" }}>
              ✦
            </Avatar>

            <Box flex={1}>
              <Typography fontWeight="bold">
                AskChat AI
              </Typography>

              <Typography variant="caption">
                Your AI assistant
              </Typography>
            </Box>

            <IconButton
              onClick={() => setOpen(false)}
              sx={{ color: "white" }}
              aria-label="Close chat"
            >
              ×
            </IconButton>
          </Box>
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 2,
              backgroundColor: "#f7f8fc",
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.role === "user" ? "flex-end" : "flex-start",
                  mb: 2,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.5,
                    maxWidth: "85%",
                    borderRadius: 3,
                    backgroundColor:
                      msg.role === "user" ? "#1976d2" : "white",
                    color:
                      msg.role === "user" ? "white" : "#222",
                    overflowWrap: "anywhere",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ whiteSpace: "pre-wrap" }}
                  >
                    {msg.content}
                  </Typography>
                </Paper>
              </Box>
            ))}

            {loading && (
              <Box display="flex" alignItems="center" gap={1}>
                <CircularProgress size={18} />
                <Typography variant="caption" color="text.secondary">
                  AskChat is thinking...
                </Typography>
              </Box>
            )}

            <div ref={messagesEndRef} />
          </Box>
          {messages.length === 1 && (
            <Box sx={{ px: 2, pb: 1 }}>
              {suggestions.map((suggestion) => (
                <Box key={suggestion} sx={{ mb: 0.5 }}>
                  <Typography
                    onClick={() => sendMessage(suggestion)}
                    sx={{
                      cursor: "pointer",
                      fontSize: 12,
                      color: "primary.main",
                      border: "1px solid #ddd",
                      borderRadius: 3,
                      p: 1,
                      "&:hover": {
                        backgroundColor: "#eaf2ff",
                      },
                    }}
                  >
                    {suggestion}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}

          {/* Message Input */}

          <Box
            sx={{
              p: 1.5,
              display: "flex",
              gap: 1,
              borderTop: "1px solid #eee",
              backgroundColor: "white",
            }}
          >
            <TextField
              fullWidth
              size="small"
              multiline
              maxRows={3}
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />

            <IconButton
              color="primary"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              aria-label="Send message"
            >
              ➤
            </IconButton>
          </Box>

        </ChatWindow>
      )}
    </>
  );
}
