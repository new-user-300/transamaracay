export type ReactSelectOption = { value: string | number; label: string | number | boolean | Date };

export interface File extends Blob {
	readonly name?: string;
	id?: string | number;
	preview?: string;
}

export interface Reservacion {
	idreservacion: number;
	nombre: string;
	correo: string;
	telefono: string;
	estado: string;
	descripcion: string;
	dateCreated: Date;
}

export interface ReservacionDTO {
	nombre: string;
	correo: string;
	telefono: string;
	estado: string;
	descripcion: string;
}
