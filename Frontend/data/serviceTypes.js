export default serviceTypes = [
  {
    id: 1,
    name: 'Выездной приём',
    price: {
      from: 900,
      to: 1200,
    },
    toDo: [
      {
        id: 1,
        text: 'Выезд к заявителю с целью приема заявления.',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 900,
              to: 1200,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 900,
              to: 1200,
            },
          },
        ],
      },
      {
        id: 2,
        text: 'Выезд к заявителю с целью приема запросов.',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 900,
              to: 1200,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 900,
              to: 1200,
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Консультация специалистов',
    price: {
      from: 4600,
      to: 36800,
    },
    toDo: [
      {
        id: 1,
        text: 'Онлайн консультация (30 минут)',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 4600,
              to: 9200,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 9200,
              to: 18400,
            },
          },
        ],
      },
      {
        id: 2,
        text: 'Онлайн консультация (1 час)',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 8000,
              to: 15000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 15000,
              to: 27000,
            },
          },
        ],
      },
      {
        id: 3,
        text: 'Личная консультация (30 минут)',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 9200,
              to: 18400,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 10000,
              to: 22000,
            },
          },
        ],
      },
      {
        id: 4,
        text: 'Личная консультация (1 час)',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 17000,
              to: 35000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 18400,
              to: 9200,
            },
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Курьерская доставка документов',
    price: {
      from: 920,
      to: 6440,
    },
    toDo: [
      {
        id: 1,
        text: 'Внутри города (обычная)',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 920,
              to: 2760,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 1200,
              to: 3500,
            },
          },
        ],
      },
      {
        id: 2,
        text: 'Внутри города (экспресс)',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 2000,
              to: 6000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 2400,
              to: 7000,
            },
          },
        ],
      },
      {
        id: 3,
        text: 'Междугородняя доставка (обычная)',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 3000,
              to: 8000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 3500,
              to: 9500,
            },
          },
        ],
      },
      {
        id: 4,
        text: 'Междугородняя доставка (экспресс)',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 5000,
              to: 12000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 5500,
              to: 15000,
            },
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Составление договоров',
    price: {
      from: 1000,
      to: 90000,
    },
    toDo: [
      {
        id: 1,
        text: 'Простой договор',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 1000,
              to: 10000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 1500,
              to: 15000,
            },
          },
        ],
      },
      {
        id: 2,
        text: 'Сложный договор',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 5000,
              to: 30000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 8000,
              to: 90000,
            },
          },
        ],
      },
      {
        id: 3,
        text: 'Редактирование существующего договора',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 500,
              to: 20000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 800,
              to: 60000,
            },
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Лекции и семинары',
    price: {
      from: 500,
      to: 50000,
    },
    toDo: [
      {
        id: 1,
        text: 'Участие в лекции/семинаре',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 500,
              to: 5000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 900,
              to: 7000,
            },
          },
        ],
      },
      {
        id: 2,
        text: 'Организация лекции/семинара',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 10000,
              to: 30000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 15000,
              to: 50000,
            },
          },
        ],
      },
      {
        id: 3,
        text: 'Семинар по легальным аспектам бизнеса',
        to: [
          {
            id: 1,
            name: 'Для юридических лиц',
            price: {
              from: 3000,
              to: 15000,
            },
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Оформление недвижимости',
    price: {
      from: 3000,
      to: 110000,
    },
    toDo: [
      {
        id: 1,
        text: 'Помощь в оформлении документов на покупку/продажу',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 3000,
              to: 10000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 7000,
              to: 30000,
            },
          },
        ],
      },
      {
        id: 2,
        text: 'Юридическое сопровождение сделки',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 10000,
              to: 50000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 15000,
              to: 110000,
            },
          },
        ],
      },
      {
        id: 3,
        text: 'Проверка документов на собственность',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 500,
              to: 3000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 700,
              to: 3500,
            },
          },
        ],
      },
      {
        id: 4,
        text: 'Оценка недвижимости',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 1000,
              to: 12000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 1200,
              to: 14000,
            },
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Кадастровые услуги',
    price: {
      from: 500,
      to: 5000,
    },
    toDo: [
      {
        id: 1,
        text: 'Проверка кадастровых данных',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 500,
              to: 2000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 700,
              to: 3000,
            },
          },
        ],
      },
      {
        id: 2,
        text: 'Получение выписки из ЕГРН',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 600,
              to: 2500,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 1000,
              to: 5000,
            },
          },
        ],
      },
      {
        id: 3,
        text: 'Подготовка технического плана',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 1500,
              to: 15000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 2000,
              to: 20000,
            },
          },
        ],
      },
      {
        id: 4,
        text: 'Оформление технического паспорта',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 300,
              to: 4000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 500,
              to: 5000,
            },
          },
        ],
      },
      {
        id: 5,
        text: 'Оформление прав на земельный участок',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 1000,
              to: 10000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 1500,
              to: 13000,
            },
          },
        ],
      },
      {
        id: 6,
        text: 'Составление акта освидетельствования земельного участка',
        to: [
          {
            id: 1,
            name: 'Для юридических лиц',
            price: {
              from: 1500,
              to: 10000,
            },
          },
        ],
      },
      {
        id: 7,
        text: 'Юридическое сопровождение приобретения земельного участка',
        to: [
          {
            id: 1,
            name: 'Для юридических лиц',
            price: {
              from: 5000,
              to: 40000,
            },
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Межевой план',
    price: {
      from: 4000,
      to: 15000,
    },
    toDo: [
      {
        id: 1,
        text: 'Подготовка межевого плана',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 4000,
              to: 20000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 7000,
              to: 30000,
            },
          },
        ],
      },
      {
        id: 2,
        text: 'Согласование межевого плана с государственными органами',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 2000,
              to: 10000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 3000,
              to: 15000,
            },
          },
        ],
      },
      {
        id: 3,
        text: 'Подготовка акта обследования границ земельного участка',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 500,
              to: 5000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 1000,
              to: 15000,
            },
          },
        ],
      },
      {
        id: 4,
        text: 'Уточнение границ земельного участка',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 3000,
              to: 15000,
            },
          },
          {
            id: 2,
            name: 'Для юридических лиц',
            price: {
              from: 5000,
              to: 45000,
            },
          },
        ],
      },
      {
        id: 5,
        text: 'Получение государственного акта на право собственности',
        to: [
          {
            id: 1,
            name: 'Для физических лиц',
            price: {
              from: 1100,
              to: 12500,
            },
          },
        ],
      },
      {
        id: 6,
        text: 'Сопровождение межевания земельных участков',
        to: [
          {
            id: 1,
            name: 'Для юридических лиц',
            price: {
              from: 2000,
              to: 14000,
            },
          },
        ],
      },
    ],
  },
]
