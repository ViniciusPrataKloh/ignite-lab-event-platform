import { gql, useQuery } from '@apollo/client';
import '@vime/core/themes/default.css';
import { DefaultUi, Player as VideoPlayer, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

interface PlayerProps {
    lessonSlug: string;
}

interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
    }
}

const GET_LESSON_BY_SLUG = gql`
    query GetLessonBySlug($slug: String){
        lesson(where: {slug: $slug}){
        title
        videoId
        description
        teacher{
            bio
            avatarURL
            name
        }
    }
  }`;

export function Player(props: PlayerProps) {

    const { data, loading } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG, {
        variables: {
            slug: props.lessonSlug
        },
        fetchPolicy: 'no-cache'
    })

    if (!data) {
        return (
            <div className='flex-1'>
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className="flex-1">

            {/* Player */}
            <div className="flex justify-center bg-black">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video bg-zinc-900">
                    <VideoPlayer>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </VideoPlayer>
                </div>
            </div>

            {/* Informations */}
            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">

                    {/* Title and Description */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data?.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data?.lesson.description}
                        </p>

                        {/* Teacher */}
                        <div className="flex items-center gap-4 mt-6">
                            <img
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                                src={data?.lesson.teacher.avatarURL}
                                alt=""
                            />
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">
                                    {data?.lesson.teacher.name}
                                </strong>
                                <span className="text-gray-200 text-sm block">
                                    {data?.lesson.teacher.bio}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-4">
                        <a
                            href=""
                            className="flex items-center justify-center p-4 bg-green-500 text-sm font-bold rounded gap-2 uppercase hover:bg-green-700 transition-colors"
                        >
                            <DiscordLogo size={20} />
                            Comunidade do Discord
                        </a>
                        <a
                            href=""
                            className="flex items-center justify-center p-4 text-blue-500 text-sm font-bold rounded gap-2 uppercase border-[1px] border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
                        >
                            <Lightning size={20} />
                            Acesse o desafio
                        </a>
                    </div>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-8 mt-20 pb-44">
                    <a
                        className="flex items-stretch gap-6 bg-gray-700 rounded overflow-hidden hover:bg-gray-600 transition-colors"
                        href=""
                    >
                        <div className="flex items-center h-full p-6 bg-green-700 ">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Material complementar
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>

                        <div className="flex items-center h-full p-6">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a
                        className="flex items-stretch gap-6 bg-gray-700 rounded overflow-hidden hover:bg-gray-600 transition-colors"
                        href=""
                    >
                        <div className="flex items-center h-full p-6 bg-green-700 ">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>

                        <div className="flex items-center h-full p-6">
                            <CaretRight size={24} />
                        </div>
                    </a>

                </div>
            </div>

            {/* Footer */}
            <div className="flex flex-row items-center justify-around border-t border-gray-600">
                <div className="flex flex-row items-center gap-6 max-x-[440px]">
                    <img
                        className="w-40 p-8"
                        src="../../src/assets/logo-rockeat.png"
                        alt="Logo da Rocketseat" />
                    <p className="text-sm">
                        Rocketseat - Todos os direitos reservados
                    </p>
                </div>
                <p className="text-sm">
                    Política de privacidade
                </p>
            </div>
        </div>
    );
}