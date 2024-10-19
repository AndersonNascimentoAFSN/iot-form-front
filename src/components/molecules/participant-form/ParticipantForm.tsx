'use client'

import { Controller, useForm } from 'react-hook-form';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { sendParticipantFormAction } from '@/actions/sendParticipantFormAction';
import { sendParticipantSchema } from '@/schemas/sendParticipantSchema';
import { sendParticipantFormData } from '@/@types/sendParticipantFormData';

export function ParticipantForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(sendParticipantSchema),
    defaultValues: {
      name: '',
      dateOfBirth: '',
      levelOfEducation: 0,
      gender: '',
      programming: false,
      student: false,
    },
  })

  const levelOfEducationsOptions = [
    { id: 0, label: "Ensino Fundamental (completo)", value: 1 },
    { id: 1, label: "Ensino Fundamental (incompleto)", value: 2 },
    { id: 2, label: "Ensino Médio (completo)", value: 3 },
    { id: 3, label: "Ensino Médio (incompleto)", value: 4 },
    { id: 4, label: "Curso Técnico (completo)", value: 5 },
    { id: 5, label: "Curso Técnico (em andamento)", value: 6 },
    { id: 6, label: "Superior (completo)", value: 7 },
    { id: 7, label: "Superior (em andamento)", value: 8 },
    { id: 8, label: "Pós-graduação (especialização)", value: 9 },
    { id: 9, label: "Mestrado", value: 10 },
    { id: 10, label: "Doutorado", value: 11 },
    { id: 11, label: "Outro", value: 12 }
  ]

  async function handleSubmitForm(values: sendParticipantFormData) {
    console.log('values', values)
    // await sendParticipantFormAction()
  }

  return (
    <form
      className="flex flex-col justify-between flex-1"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            autoFocus
            placeholder="Digite o seu nome completo..."
            {...register('name')}
          />

          {errors?.name && (
            <span className="text-red-400 text-sm">
              {errors?.name?.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="dateOfBirth">Data de Nascimento (dd/mm/aaaa)</Label>
          <Input
            id="dateOfBirth"
            autoFocus
            type='date'
            {...register('dateOfBirth')}
          />

          {errors?.dateOfBirth && (
            <span className="text-red-400 text-sm">
              {errors?.dateOfBirth?.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="levelOfEducation">Qual é o seu nível de formação?</Label>
          <Controller
            control={control}
            name="levelOfEducation"
            render={({ field: { onChange, value } }) => {
              return (
                <RadioGroup
                  onValueChange={onChange}
                  value={String(value)}
                  id='levelOfEducation'
                >
                  {levelOfEducationsOptions.map(option => (
                    <RadioGroupItem
                      key={option.id}
                      value={String(option.value)}
                    >
                      <div className="flex items-center gap-4">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          {option.label}
                        </span>
                      </div>
                    </RadioGroupItem>
                  ))}
                </RadioGroup>
              )
            }}
          />
          {errors?.levelOfEducation && (
            <span className="text-red-400 text-sm">
              {errors?.levelOfEducation?.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="first">Sexo</Label>
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value } }) => {
              return (
                <RadioGroup
                  onValueChange={onChange}
                  value={String(value)}
                >
                  <RadioGroupItem
                    value={'m'}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        Masculino
                      </span>
                    </div>
                  </RadioGroupItem>

                  <RadioGroupItem
                    value={'f'}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        Feminino
                      </span>
                    </div>
                  </RadioGroupItem>

                  <RadioGroupItem
                    value={'o'}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        Outro
                      </span>
                    </div>
                  </RadioGroupItem>
                </RadioGroup>

              )
            }}
          />
          {errors?.gender && (
            <span className="text-red-400 text-sm">
              {errors?.gender?.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="first">Você já estudou programação?</Label>
          <Controller
            control={control}
            name="programming"
            render={({ field: { onChange, value } }) => {
              return (
                <RadioGroup
                  onValueChange={onChange}
                  value={String(value)}
                >
                  <RadioGroupItem
                    value={'true'}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        Sim
                      </span>
                    </div>
                  </RadioGroupItem>

                  <RadioGroupItem
                    value={'false'}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        Não
                      </span>
                    </div>
                  </RadioGroupItem>
                </RadioGroup>
              )
            }}
          />
          {errors?.programming && (
            <span className="text-red-400 text-sm">
              {errors?.programming?.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="first">Você é estudante da UFAL?</Label>
          <Controller
            control={control}
            name="student"
            render={({ field: { onChange, value } }) => {
              return (
                <RadioGroup
                  onValueChange={onChange}
                  value={String(value)}
                >
                  <RadioGroupItem
                    value={'true'}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        Sim
                      </span>
                    </div>
                  </RadioGroupItem>

                  <RadioGroupItem
                    value={'false'}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        Não
                      </span>
                    </div>
                  </RadioGroupItem>
                </RadioGroup>
              )
            }}
          />
          {errors?.student && (
            <span className="text-red-400 text-sm">
              {errors?.student?.message?.toString()}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-8">
        <Button type="submit" className="flex-1">
          Enviar
        </Button>
      </div>
    </form>
  )
}