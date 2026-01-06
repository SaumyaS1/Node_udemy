
import { getAllJobs, getJob, CreateJob, UpdateJob, DeleteJob } from '../controllers/jobs.js';
import { Router } from 'express'

const router= Router();

router.route('/').get(getAllJobs).post(CreateJob)
router.route('/:id').get(getJob).patch(UpdateJob).delete(DeleteJob)

export default router