import Animation from "@/components/Home/animation";
import Link from "next/link";

export default function Hero(){

    return(
        <>
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h4 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">

                        안녕하세요!
                        <br/>항상 성장하고 싶은 정성민입니다.

                        <br className="hidden lg:inline-block"/>
                    </h4>
                    <p className="mb-8 leading-relaxed text-3xl">저는 UI/UX 디자이너와 Front-End의 분야에 희망하는 정성민이라고 합니다.
                    Android에서는 Java, Web관련하여 JavaScript를 주로 사용합니다. react를 활용한 Next.js를 공부하고 있습니다. UI/UX 디자인 부분에서
                        Figma를 활용합니다. 다양한 프로젝트를 통해 리더의 자리에서, 팀원의 자리에서 다양하게 역할해왔으며, 경험들을 포트폴리오에 담아보았습니다.
                    </p>
                    <div className="flex justify-center">
                        <Link href={"/projects"} legacyBehavior>
                            <a
                                className="projectButton">
                                프로젝트 보러가기
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation/>
                </div>
        </>
    )
}