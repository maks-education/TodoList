import express from 'express';

export function dist (app) {
    app.use('/', express.static('dist'));
} 
