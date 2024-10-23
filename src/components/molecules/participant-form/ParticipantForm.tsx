'use client'

import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { sendParticipantFormAction } from '@/actions/sendParticipantFormAction';
import { sendParticipantSchema } from '@/schemas/sendParticipantSchema';
import type { sendParticipantFormData } from '@/@types/sendParticipantFormData';
import type { ISelectOptions } from '@/@types/selectOptions';

export function ParticipantForm({ educationLevelsOptions }: { educationLevelsOptions: ISelectOptions[] }) {
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
      educationLevelId: '',
      gender: '',
      hasStudiedProgramming: false,
      isUfalStudent: false,
    },
  })

  async function handleSubmitForm(values: sendParticipantFormData) {
    const createdParticipant = await sendParticipantFormAction(values)
    console.log('createdParticipant', createdParticipant)

    if (createdParticipant.error) {
      toast.error('Ocorreu um erro ao enviar o formulário')
    }
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
            name="educationLevelId"
            render={({ field: { onChange, value } }) => {
              return (
                <RadioGroup
                  onValueChange={onChange}
                  value={String(value)}
                  id='levelOfEducation'
                >
                  {educationLevelsOptions.map(option => (
                    <RadioGroupItem
                      key={option.value}
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
          {errors?.educationLevelId && (
            <span className="text-red-400 text-sm">
              {errors?.educationLevelId?.message?.toString()}
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
                    value={'male'}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        Masculino
                      </span>
                    </div>
                  </RadioGroupItem>

                  <RadioGroupItem
                    value={'female'}
                  >
                    <div className="flex items-center gap-4">
                      <RadioGroupIndicator />
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        Feminino
                      </span>
                    </div>
                  </RadioGroupItem>

                  <RadioGroupItem
                    value={'other'}
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
            name="hasStudiedProgramming"
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
          {errors?.hasStudiedProgramming && (
            <span className="text-red-400 text-sm">
              {errors?.hasStudiedProgramming?.message?.toString()}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="first">Você é estudante da UFAL?</Label>
          <Controller
            control={control}
            name="isUfalStudent"
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
          {errors?.isUfalStudent && (
            <span className="text-red-400 text-sm">
              {errors?.isUfalStudent?.message?.toString()}
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