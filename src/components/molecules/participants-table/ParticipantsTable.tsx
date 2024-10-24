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
import type { IParticipantsResponse } from '@/http/fetch-participants'

export function ParticipantsTable({
  participants,
}: { participants: IParticipantsResponse }) {
  return (
    <Table>
      <TableCaption>Lista dos participantes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Data de nascimento</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {participants?.data?.map(participant => (
          <TableRow key={participant.id}>
            <TableCell className="font-medium">{participant.name}</TableCell>
            <TableCell>{participant.dateOfBirth}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total de participantes</TableCell>
          <TableCell className="text-right">{participants?.total}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
// colSpan={3} is used to make the cell span 3 columns
