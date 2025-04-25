import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function FeedbackCard({ feedback, isDarkTheme }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: isDarkTheme ? '#333' : '#f5f5f5',
        color: isDarkTheme ? '#fff' : '#000',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <FormatQuoteIcon
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '20px',
          height: '20px',
          color: isDarkTheme ? '#fff' : '#000',
        }}
      />
      <FormatQuoteIcon
        style={{
          position: 'absolute',
          bottom: '0px',
          right: '0px',
          width: '20px',
          height: '20px',
          color: isDarkTheme ? '#fff' : '#000',
        }}
      />
      <CardActionArea>
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              color: isDarkTheme ? '#fff' : 'black',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              marginBottom: '10px',
            }}
          >
            {feedback.description}
          </Typography>
        </CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: isDarkTheme ? '#fff' : 'black',
            fontSize: '1.2rem',
            padding: '10px',
            marginLeft: '20px',
            marginBottom: '10px',
          }}
        >
          {feedback.name} &nbsp; &nbsp; {feedback.email}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: isDarkTheme ? '#ccc' : 'black',
            fontweight: '20px',
            padding: '10px',
            fontSize: '1rem',
            fontStyle: 'italic',
            marginLeft: '20px',
          }}
        >
          {new Date(feedback.createdAt).toLocaleDateString()}
        </Typography>
      </CardActionArea>
    </Card>
  );
}