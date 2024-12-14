import { fetchInvoiceById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { deleteInvoice } from '@/app/lib/actions';
import DeleteModal from '@/app/ui/invoices/delete-modal';

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const invoice = await fetchInvoiceById(id);
    const deleteInvoiceWithId = deleteInvoice.bind(null, id);

    if (!invoice) {
        notFound();
    }
    return (
        <main>
            <DeleteModal invoiceId={id} deleteInvoice={deleteInvoiceWithId}/>
        </main>
    );
}
