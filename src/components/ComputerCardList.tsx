import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Chip,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

import { Computer } from '@/data/mockComputers';

interface ComputerCardListProps {
  computers: Computer[];
}

export default function ComputerCardList({ computers }: ComputerCardListProps) {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="stretch"
      wrap="wrap"
      sx={{ maxWidth: 1500, mx: 'auto' }}
    >
      {computers.map((comp) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={comp.id}
          sx={{ display: 'flex' }}
          component="div"
          {...({} as any)}
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              width: 250,
              height: 500,
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              },
            }}
          >
            <Box
              sx={{
                height: 200,
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                '& img': {
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <CardMedia
                component="img"
                image={comp.image}
                alt={comp.name}
                sx={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>

            <CardContent
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" gutterBottom>
                {comp.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {comp.description}
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                ${comp.price}
              </Typography>
              <Chip
                label={comp.inStock ? 'In Stock' : 'Out of Stock'}
                color={comp.inStock ? 'success' : 'default'}
                size="small"
                sx={{ mt: 1 }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
