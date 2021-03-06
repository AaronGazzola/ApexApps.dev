import React, { useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import useStyles from 'styles/contentStyles';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogsAction } from 'actions/blogActions';
import { Link } from 'react-router-dom';

const BlogsScreen = () => {
	const dispatch = useDispatch();
	const classes = useStyles();

	const getBlogs = useSelector(state => state.getBlogs);
	const { loading, blogs } = getBlogs;

	useEffect(() => {
		dispatch(getBlogsAction());
	}, []);

	return (
		<Grid container direction='column' alignItems='center'>
			<div className={classes.textBox1}>
				<Typography variant='h1' className={classes.title}>
					Apex Articles
				</Typography>
				<Typography className={classes.paragraph}>
					Tips and tricks for{' '}
					<span className={classes.highlight}>increasing sales</span>
					&nbsp;and&nbsp;
					<span className={classes.highlight}>reducing costs</span>
					<br />
					with the power of web applications.
				</Typography>
			</div>
			{loading
				? [...Array(5).keys()].map(x => (
						<Skeleton
							key={x}
							variant='rect'
							className={classes.skeleton}
							height={120}
							width={400}
						/>
				  ))
				: blogs?.map(blog => (
						<Link
							to={`/blog/${blog.slug}`}
							className={clsx(classes.linkReset, classes.blogList)}
							key={blog._id}
						>
							<Typography variant='h2' className={classes.subTitle}>
								{blog.title}
							</Typography>
							<Typography variant='body2' className={classes.date}>
								{moment(blog.createdAt.substring(0, 10)).format('Do MMM YYYY')}
							</Typography>
							<Typography className={classes.paragraph}>
								{blog.description}
							</Typography>
						</Link>
				  ))}
		</Grid>
	);
};

export default BlogsScreen;
