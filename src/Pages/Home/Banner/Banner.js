import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const Banner = () => {
    
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://i.ibb.co/HxMtJ0M/motocross-g5f7cbd398-1280.jpg',
  },
  {
   
    imgPath:
      'https://i.ibb.co/zPs90rV/banner2.jpg',
  },
  {
   
    imgPath:
      'https://i.ibb.co/FnC3CPP/banner3.jpg',
  },
  {
  
    imgPath:
      'https://i.ibb.co/Z1h5MVJ/banner4.jpg',
  },
];
const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
 


  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

    return (
        <Box sx={{ maxWidth: 1200,maxHeight:1200, m:'auto', flexGrow: 1, }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            m:1,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
        <Box
        component="img"
        sx={{
            height: 600,
            display: 'block',
            Width: 750,
            mx:'auto',
            overflow: 'hidden',
            width: '100%',
        }}
        src={step.imgPath}
        alt={step.label}
      />
    ) : null}
  </div>
))}
</AutoPlaySwipeableViews>

</Box>
    );
};

export default Banner;