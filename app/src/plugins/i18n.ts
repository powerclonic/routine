/**
 * plugins/i18n.ts
 *
 * Lib documentation: https://vue-i18n.intlify.dev/guide/installation.html`
 */

import { createI18n } from 'vue-i18n'

export default createI18n({
  locale: 'pt-br',
  fallbackLocale: 'pt-br',
  messages: {
    'pt-br': {
      weekdays: {
        sunday: 'Domingo',
        monday: 'Segunda-Feira',
        tuesday: 'Terça-Feira',
        wednesday: 'Quarta-Feira',
        thursday: 'Quinta-Feira',
        friday: 'Sexta-Feira',
        saturday: 'Sábado',
      },
      compliments: {
        morning: 'Tenha um bom dia!',
        afternoon: 'Tenha uma boa tarde!',
        night: 'Tenha uma boa noite!',
      },
      messages: {
        activities: {
          planned: 'Nenhuma atividade prevista | Uma atividade prevista | {count} atividades previstas',
          noDetails: 'Sem mais detalhes',
          replicated: 'Esta atividade será replicada automaticamente todas as semanas',
        },
      },
      titles: {
        quickAccess: 'Dia de hoje',
        todayActivities: 'Atividades de hoje',
        dailyNotes: 'Anotações diárias',
        generalProgress: 'Progresso geral',
        allDays: 'Todos os dias da semana',
        newActivity: 'Nova atividade',
        nextDayActivities: 'Atividades',
        allDaysActivities: 'Atividades semanais',
        weekday: 'Dia da semana',
        details: 'Detalhes',
      },
      subtitles: {
        quickAccess: 'Acesse a visão geral do dia de hoje',
        todayActivities: 'Um pequeno resumo do seu grande dia',
        dailyNotes: 'Escreva o que quiser aqui',
        generalProgress: 'Dados do andamento do ano',
        nextDayActivities: 'Estas atividades não serão replicadas automaticamente para as próximas semanas',
        allDaysActivities: 'Estas atividades serão replicadas automaticamente',
        weekday: 'Selecione todos que se aplicarem',
        details: 'Apenas o título e o horário são obrigatórios',
      },
      labels: {
        progress: {
          day: 'Progresso do dia',
          week: 'Progresso da semana',
          month: 'Progresso do mês',
          year: 'Progresso do ano',
        },
        next: 'Próximo',
        all: 'Todos',
        title: 'Título',
        mandatory: 'Obrigatório',
        optional: 'Opcional',
        description: 'Descrição',
        time: 'Horário',
        weeklyActivity: 'Atividade semanal',
      },
    },
    en: {},
  },
})
