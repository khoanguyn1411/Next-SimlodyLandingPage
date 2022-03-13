import { Button, Checkbox, FormItem, Input } from '@components/elements';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { InformationContact } from './sections';
import { SelectControl } from './select-control';

const NATURE_OPTIONS = [
	{
		name: 'Service Business',
		value: 'Service Business',
	},
	{
		name: 'Merchandising Business',
		value: 'Merchandising Business',
	},
	{
		name: 'Manufacturing Business',
		value: 'Manufacturing Business',
	},
	{
		name: 'Hybrid Business',
		value: 'Hybrid Business',
	},
];

type FormData = {
	'1094177665': string;
	'1972180196': string;
	'720319275': string;
	'906613551': string;
	'1666397851': string;
	'943474339': string;
};

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
	.object({
		'1094177665': yup.string().required('Company name is required'),
		'1972180196': yup.string(),
		'720319275': yup
			.string()
			.email('Email is not valid')
			.required('Email is required'),
		'906613551': yup
			.string()
			.matches(phoneRegExp, 'Contact number is not valid')
			.required('Contact number is required'),
		'1666397851': yup.string().required('Content is required'),
		'943474339': yup.string(),
	})
	.required();

export const ContactContainer = () => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
		defaultValues: {
			'1094177665': '',
			'1972180196': '',
			'720319275': '',
			'906613551': '',
			'1666397851': '',
			'943474339': 'False',
		},
	});

	const onSubmit = async (values: FormData) => {
		const formBody = {};

		for (const name in values) {
			if (values[name]) {
				formBody[`entry.${name}`] = values[name];
			}
		}

		const response = await fetch(
			'https://docs.google.com/forms/d/e/1FAIpQLSeK450oyqit0D0y4fXrKH7beFjpGuY5nfO5CB1ArM9Ij49SxA/formResponse',
			{
				method: 'POST',
				body: new URLSearchParams(formBody),
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);

		console.log('📢 response', response);
		if (response.status === 200 || response.type === 'opaque') {
			toast.success('Thank you for contacting us. We will contact you soon.');
			reset({
				'1094177665': '',
				'1972180196': '',
				'720319275': '',
				'906613551': '',
				'1666397851': '',
				'943474339': 'False',
			});
		}
	};

	return (
		<div className='flex items-center justify-center py-8'>
			<div className='container'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-24'>
					<div className='col-span-1'>
						<div className='flex flex-col justify-center space-y-4 max-w-xl'>
							<h2 className='text-3xl font-semibold'>Contact Us</h2>

							<h2 className='text-gray-400'>
								Fill out the form to get a free consultation.
							</h2>

							<form onSubmit={handleSubmit(onSubmit)}>
								<Controller
									name='1094177665'
									control={control}
									rules={{ required: true }}
									defaultValue=''
									render={({ field: { ...field } }) => (
										<FormItem
											label='Name of Company'
											isRequired
											error={errors?.[1094177665]?.message}
										>
											<Input
												placeholder='ex: TungTung venture company'
												type='primary'
												{...field}
											/>
										</FormItem>
									)}
								/>
								<Controller
									name='1972180196'
									control={control}
									defaultValue=''
									render={({ field: { onChange, value } }) => (
										<FormItem
											label='Nature of business'
											error={errors?.['1972180196']?.message}
										>
											<SelectControl
												placeholder='Your title'
												options={NATURE_OPTIONS}
												value={value}
												onChange={(value) => onChange({ target: { value } })}
											/>
										</FormItem>
									)}
								/>

								<Controller
									name='720319275'
									control={control}
									defaultValue=''
									rules={{ required: true }}
									render={({ field: { ...field } }) => (
										<FormItem
											label='Your email address'
											isRequired
											error={errors?.['720319275']?.message}
										>
											<Input
												placeholder='ex: TungTung@gmail.com'
												type='primary'
												{...field}
											/>
										</FormItem>
									)}
								/>

								<Controller
									name='906613551'
									control={control}
									defaultValue=''
									rules={{ required: true }}
									render={({ field: { ...field } }) => (
										<FormItem
											label='Contact number'
											isRequired
											error={errors?.[906613551]?.message}
										>
											<Input
												placeholder='ex: +84 901 960 ***'
												type='primary'
												{...field}
											/>
										</FormItem>
									)}
								/>

								<Controller
									name='1666397851'
									control={control}
									defaultValue=''
									rules={{ required: true }}
									render={({ field: { ...field } }) => (
										<FormItem
											label='What can we help you'
											isRequired
											error={errors?.['1666397851']?.message}
										>
											<textarea
												placeholder='ex: I want to build new Saas product for my company...'
												rows={3}
												className='px-4 py-3 bg-gray-100 rounded-md outline-none w-full'
												{...field}
											/>
										</FormItem>
									)}
								/>

								<Controller
									name='943474339'
									control={control}
									defaultValue='False'
									render={({ field: { value, onChange } }) => (
										<FormItem error={errors?.['943474339']?.message}>
											<Checkbox
												label='I want to protect my data by signing an NDA'
												value={value === 'True'}
												onChange={(value) => {
													onChange({
														target: { value: value ? 'True' : 'False' },
													});
												}}
											/>
										</FormItem>
									)}
								/>

								<Button
									text='Submit Application'
									type='primary'
									block
									onClick={handleSubmit(onSubmit)}
									loading={isSubmitting}
								/>
							</form>
						</div>
					</div>

					<div className='col-span-1'>
						<InformationContact />
					</div>
				</div>
			</div>
		</div>
	);
};
