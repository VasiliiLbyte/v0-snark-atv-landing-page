import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — СНАРК',
  description: 'Политика конфиденциальности сайта СНАРК.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="container-page py-24 md:py-32">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
        >
          ← На главную
        </Link>

        <header className="mt-10 border-b border-border pb-10">
          <span className="section-eyebrow">Юридическая информация</span>
          <h1 className="section-title mt-4 text-5xl md:text-7xl">
            Политика конфиденциальности</h1>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Дата вступления в силу: 16 мая 2026 г.
          </p>
        </header>

        <div className="mt-12 max-w-4xl space-y-12 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground">1. Общие положения</h2>
            <p>1.1. Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных физических лиц, которые используют сайт <strong className="text-foreground">snarkatv.ru</strong>.</p>
            <p>1.2. Оператором персональных данных является ООО «СНАРК ГРУП», ИНН: 7806258819, КПП: 780601001, ОГРН: 1167847490040.</p>
            <p>Юридический адрес: 195067, г. Санкт-Петербург, Екатерининский пр-кт, д. 1, лит. А, пом. 6Н, офис 11. Email: sales@snark.ru. Телефон: 8 800 333 50 59.</p>
            <p>1.3. Политика разработана в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
            <p>1.4. Используя сайт и/или оставляя данные в формах обратной связи, пользователь подтверждает согласие на обработку персональных данных.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground">2. Какие данные мы собираем</h2>
            <p>При заполнении формы записи на тест-драйв или обратной связи мы собираем имя, номер телефона, город/регион и комментарий, если он оставлен.</p>
            <p>При посещении сайта автоматически фиксируются IP-адрес, тип браузера и операционная система, посещённые страницы, время визита и источник перееода.</p>
            <p>Эти данные собираются с помощью счётчиков веб-аналитики, включая Яндекс.Метрику, и файлов куки.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground">3. Для чего мы используем ваши данные</h2>
            <div className="overflow-hidden rounded-md border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-secondary text-foreground">
                  <tr>
                    <th className="border-b border-border p-4">Цель</th>
                    <th className="border-b border-border p-4">Правовое основание</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border-b border-border p-4">Обработка заявок на тест-драйв и обратной связи</td><td className="border-b border-border p-4">Согласие субъекта</td></tr>
                  <tr><td className="border-b border-border p-4">Ответы на вопросы и консультации</td><td className="border-b border-border p-4">Согласие субъекта</td></tr>
                  <tr><td className="border-b border-border p-4">Улучшение работы сайта и анализ посещаемости</td><td className="border-b border-border p-4">Законный интерес оператора</td></tr>
                  <tr><td className="p-4">Соблюдение требований законодательства РФ</td><td className="p-4">Исполнение правового обязательства</td></tr>
                </tbody>
              </table>
            </div>
            <p>Мы не используем ваши данные для автоматизированного принятия решений и не передаем их третьим лицам в целях маркетинга.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground">4. Передача данных третьим лицам</h2>
            <p>Мы не продаем и не передаем персональных данных третьим лицам без согласия, за исключением случаев, преднаусмотренных законодательством РФ.</p>
            <p>Для анализа посещаемости используется Яндекс.Метрику. Собираемые данные обрабатываются в соответствии с политикой конфиденциальности Яндекса и передаются в обезличенном виде.</p>
            <p>При законном запросе Роскомнадзора, суда или иных уполномоченных органов РФ мы обязаны предоставить необходимые данные.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground">5. Файлы куки</h2>
            <p>Сайт использует файлы куки. Технические куки обеспечивают корректную работу сайта, аналитические используется для анализа поведения пользователей.</p>
            <p>Вы можете отключить куки в настройках браузера, но это может повлиать на работу некоторых функций сайта.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground">6. Срок хранения данных</h2>
            <p>Персональных данные, переданные через формы обратной связи, хранятся не дольше, чем необходимо для достижения целей обработки, но не более 3 лет с момента последнего обращения.</p>
            <p>Данные, собранные автоматически, хранятся в соответствии с настройками соответствующих сервисов. По истечении срока хранения данные уничтожаются.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground">7. Ваши права</h2>
            <p>Вы вправе гети инкормацию о данных, потребовать исповрание неточных данных, отозвать согласие на обработку, потребовать удаление данных и обрассся с жалобой в Роскомнадзор.</p>
            <p>Для реализации прав направляйте запрос на sales@snark.ru с темой «Персональных данных». Мы рассмотрим запрос в течение 30 календарных дней.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground">8. Защита данных</h2>
            <p>Мы принимаем организационные и текнические меры для защиты данных от несанкционированного доступа, изменения, разкрытип или уничтожения.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground">9. Изменения в Политике</h2>
            <p>Мы оставляем за собой право вносить изменения в Политике. Актуальная версия доступна на сайте по адресу snarkatv.ru/privacy.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight text-foreground">10. Контактная информация</h2>
            <p>ООО «СНАРК ГРУП», 195067, г. Санкт-Петербург, Екатерининский пр-кт, д. 1, лит. А, пом. 6Н, офис 11.</p>
            <p>Емайл: sales@snark.ru. Телефон: 8 800 333 50 59.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
