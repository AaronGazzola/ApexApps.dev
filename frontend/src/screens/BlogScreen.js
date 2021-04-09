import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from 'styles/contentStyles';
import { Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { getBlogAction } from 'actions/blogActions';

const BlogScreen = ({ match }) => {
	const slug = match.params.slug;
	const classes = useStyles();

	const dispatch = useDispatch();

	const getBlog = useSelector(state => state.getBlog);
	const { blog, loading } = getBlog;

	useEffect(() => {
		dispatch(getBlogAction(slug));
	}, [dispatch, slug]);

	return (
		<Grid container direction='column' alignItems='center'>
			{loading ? (
				<>
					<Skeleton
						variant='rect'
						width={400}
						height={80}
						style={{ marginTop: 20 }}
					/>
					<Skeleton
						variant='text'
						style={{ marginTop: 20 }}
						width={600}
						height={120}
					/>
				</>
			) : (
				<>
					<Typography
						variant='h1'
						className={clsx(classes.title, classes.blogTitle)}
					>
						{blog?.title}
					</Typography>
					{blog?.paragraphs.map((p, i) => (
						<div key={i}>
							<div
								className={clsx(classes.textBox3, classes.blogTextBox)}
								key={p._id}
							>
								{p.subtitle && (
									<Typography variant='h4' className={classes.subtitle3}>
										{p.subtitle}
									</Typography>
								)}
								<Typography
									className={classes.paragraph}
									dangerouslySetInnerHTML={{ __html: p.body }}
								></Typography>
							</div>
							{p.imagePath && (
								<img
									className={classes.image}
									src={p.imagePath}
									alt={p.imageLabel}
								/>
							)}
						</div>
					))}
				</>
			)}
		</Grid>
	);
};

export default BlogScreen;
