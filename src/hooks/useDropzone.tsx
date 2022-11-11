import React, { ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDropzone as Dropzone } from 'react-dropzone';
import styled from 'styled-components';
import { FaUpload } from 'react-icons/fa';
import { toBase64 } from '../utils/toBase64';
import { RenderIf } from '@/components/@common/RenderIf';
import { File } from '@/interfaces';

const useDropzone = (props: IUseDropzoneProps): UseDropzoneReturnValues => {
	const [files, setFiles] = useState([]);
	const {
		accept = { 'image/*': [] },
		action = 'multiple',
		labelText = 'Arrastra tu imagen aqui o navega tus archivos',
		iconPreview,
		icon,
		limit = 10,
		onUpload,
		onDeleteFile,
		canDelete = true,
	} = props;

	const onDrop = (acceptedFiles: File[]) => {
		const nuevasImagenes = acceptedFiles.map(file => {
			return Object.assign(file, {
				preview: URL.createObjectURL(file),
			});
		});
		if (action === 'multiple') {
			const arrImages = [...files, ...nuevasImagenes];
			if (arrImages.length <= limit) {
				setFiles([...files, ...nuevasImagenes]);
				if (onUpload) onUpload(nuevasImagenes);
			} else {
				toast.error(
					`Has excedido la cantidad de imágnes permitidas que son ${limit}`
				);
			}
		}
		if (action === 'single') {
			setFiles(nuevasImagenes);
			if (onUpload) onUpload(nuevasImagenes[0]);
		}
	};

	const { getRootProps, getInputProps, isDragActive } = Dropzone({
		accept,
		onDrop,
		multiple: action === 'multiple' ? true : false,
	});

	const thumbs = files.map((file, index) => {
		return (
			<Thumb key={index}>
				<ThumbInner>
					{iconPreview ? (
						<div className="flex justify-center items-center h-full">
							{iconPreview}
						</div>
					) : (
						<img src={file.preview} alt="preview" />
					)}
				</ThumbInner>
				<RenderIf isTrue={canDelete}>
					<button
						type="button"
						className="btn btn-sm btn-danger"
						onClick={async () => {
							delete files[index];
							const fltr: File[] = files.filter(
								el => el !== null
							);

							fltr.sort();

							for (let i = 0; i < fltr.length; i++) {
								const img = fltr[i];
								if (!img.id) {
									fltr[i].preview =
										await toBase64(img);
								}
							}

							if (onDeleteFile) onDeleteFile(file);

							setFiles(fltr);
						}}
					>
						Eliminar
					</button>
				</RenderIf>
			</Thumb>
		);
	});

	useEffect(
		() => () => {
			files.forEach(file => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	const DropzoneContenedor = (
		<>
			<Container
				isDragActive={isDragActive}
				{...getRootProps({ className: 'dropzone' })}
			>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>
						{icon ? icon : <FaUpload className="mx-auto" />}
						Suelta el fichero para subir
					</p>
				) : (
					<p className="space-y-4">
						{icon ? icon : <FaUpload className="mx-auto" />}{' '}
						<span>{labelText}</span>
					</p>
				)}
			</Container>
			<ThumbsContainer>{thumbs}</ThumbsContainer>
		</>
	);

	return { DropzoneContenedor, files, setFiles };
};

const Container = styled.div<BorderDropzoneProps>`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px;
	border-width: 2px;
	border-radius: 3px;
	background-color: '#f1f5f9';
	border-color: ${props => getColor(props)};
	border-style: ${props => (props.isDragActive ? 'solid' : 'dashed')};
	outline: none;
	cursor: pointer;
	transition: border 0.24s ease-in-out;
	p {
		color: '#111';
		font-weight: 600;
		user-select: none;
		text-align: center;
	}
`;

const getColor = (props: BorderDropzoneProps): string => {
	if (props.isDragAccept) {
		return '#00e676';
	}
	if (props.isDragReject) {
		return '#ff1744';
	}
	if (props.isFocused || props.isDragActive) {
		return '#2196f3';
	}
	return '#2b2b2b';
};

const ThumbsContainer = styled.aside`
	display: 'flex';
	flex-direction: 'column';
	flex-wrap: 'wrap';
	margin-top: 16px;
`;

const Thumb = styled.div`
	position: relative;
	display: inline-block;
	vertical-align: top;
	margin: 16px;
	min-height: 100px;

	button {
		display: none;
	}

	&:hover button {
		display: inline;
		position: absolute;
		bottom: -10px;
		box-shadow: none !important;
		left: 25px;
	}
`;

const ThumbInner = styled.div`
	overflow: hidden;
	width: 120px;
	height: 120px;
	position: relative;
	display: block;
	border-radius: 10px;
	background: #999;
	background: linear-gradient(to bottom, #eee, #ddd);
	&:hover {
		-webkit-filter: blur(2.5px);
		filter: blur(2.5px);
	}

	img {
		object-fit: cover;
		display: block;
		height: 100%;
		max-width: 100%;
	}

	svg {
	}
`;

export default useDropzone;

interface IUseDropzoneProps {
	accept?: { [key: string]: string[] };
	action?: 'multiple' | 'single';
	labelText?: string;
	iconPreview?: ReactNode;
	icon?: ReactNode;
	limit?: number;
	onUpload?(files: File | Array<File>): void;
	onDeleteFile?(file: File): void;
	canDelete?: boolean;
	id?: string;
	key?: string;
	preview?: string;
}

interface BorderDropzoneProps {
	isDragAccept?: boolean;
	isDragReject?: boolean;
	isFocused?: boolean;
	isDragActive?: boolean;
}

interface UseDropzoneReturnValues {
	files: File[];
	DropzoneContenedor: JSX.Element;
	setFiles(values: File[]): void;
}
