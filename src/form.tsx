import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import type { HttpError } from '@refinedev/core'
import { Edit } from '@refinedev/mui'
import { useForm } from '@refinedev/react-hook-form'
import { Controller } from 'react-hook-form'

export const PostEdit: React.FC = () => {
	const {
		saveButtonProps,
		register,
		control,
		formState: { errors },
	} = useForm({
		refineCoreProps: {
			resource: 'posts',
			action: 'edit',
			id: 1,
		},
	})

	return (
		<Box component="form" sx={{ display: 'flex', flexDirection: 'column' }} autoComplete="off">
			<TextField
				id="title"
				{...register('title', {
					required: 'This field is required',
				})}
				error={!!errors.title}
				helperText={errors.title?.message}
				margin="normal"
				fullWidth
				label="Title"
				name="title"
				autoFocus
			/>

			<Controller
				control={control}
				name="status"
				rules={{ required: 'This field is required' }}
				defaultValue={null as any}
				render={({ field }) => (
					<Autocomplete<IStatus>
						id="status"
						options={['published', 'draft', 'rejected']}
						{...field}
						onChange={(_, value) => {
							field.onChange(value)
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Status"
								margin="normal"
								variant="outlined"
								error={!!errors.status}
								helperText={errors.status?.message}
								required
							/>
						)}
					/>
				)}
			/>

			<TextField
				id="content"
				{...register('content', {
					required: 'This field is required',
				})}
				error={!!errors.content}
				helperText={errors.content?.message}
				margin="normal"
				label="Content"
				multiline
				rows={4}
			/>
		</Box>
	)
}

export type IStatus = 'published' | 'draft' | 'rejected'

export interface IPost {
	id: number
	title: string
	content: string
	status: IStatus
}
