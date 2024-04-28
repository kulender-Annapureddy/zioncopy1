import express from 'express';
import { getUserDetails } from '../Controller/user.js';
import { NewsLetterSub } from '../Controller/newsletter.js';



const router =express.Router();

router.post("/user",getUserDetails );
router.post('/newsletter', NewsLetterSub);

export default router;