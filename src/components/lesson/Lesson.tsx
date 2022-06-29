import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = new Date(props.availableAt) < new Date();

    const availableAtFormated = new Intl.DateTimeFormat('pt-BR', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        timeZone: 'America/Sao_Paulo',
    }).format(new Date(props.availableAt));

    const { slug } = useParams<{ slug: string }>();

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableAtFormated}
            </span>

            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}>
                <header className="flex items-center justify-between">

                    {isLessonAvailable
                        ? (<span className={`flex items-center gap-2 text-sm font-medium ${isActiveLesson ? 'text-white' : 'text-blue-500'}`}>
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>)
                        : (<span className={`flex items-center gap-2 text-sm font-medium ${isActiveLesson ? 'text-white' : 'text-orange-500'}`}>
                            <Lock size={20} />
                            Em breve
                        </span>)
                    }

                    <span className={`text-xs rounded px-2 py-[0.125rem] text-white borde font-bold ${isActiveLesson ? 'border-white' : 'border-green-300'}`}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>
                    {props.title}
                </strong>
            </div>
        </Link >
    );
}