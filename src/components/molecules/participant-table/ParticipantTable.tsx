import { IParticipants } from '@/@types/participants'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { IParticipantResponse } from '@/http/get-participant/getParticipant'

export function ParticipantTable({
  participant,
}: { participant: IParticipantResponse }) {
  return (
    <Table>
      <TableCaption>Dados do participante</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Data de nascimento</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {participant?.data?.map(participant => (
          <TableRow key={participant.id}>
            <TableCell className="font-medium">{participant.name}</TableCell>
            <TableCell>{participant.dateOfBirth}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
