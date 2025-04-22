import { z } from "zod";

const addressCreateSerializer = z.object({
    zipCode: z.string().nonempty("ZipCode deve ser preenchido"),
    state: z.string().min(2).max(50).nonempty("Estado deve ser preenchido"),
    city: z.string().min(3).max(50).nonempty("Cidade deve ser preenchido"),
    street: z.string().min(3).max(100).nonempty("Rua deve ser preenchido"),
    number: z.string().min(1).max(10).nonempty("Número deve ser preenchido"),
    complement: z.string().max(50).optional(),
});

export { addressCreateSerializer};
