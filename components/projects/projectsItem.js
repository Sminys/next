import Image from "next/image";
export default function ProjectsItem({data}){

    const projectTitle = data.properties.Name.title[0].plain_text
    const figmaLink = data.properties.Figma.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file.url
    const tags = data.properties.Tag.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end =data.properties.WorkPeriod.date.end

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1])
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1])

        console.log(`startDate : ${startDate}`)
        console.log(`endDate : ${endDate}`)

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        return result;

    };

    return(
        <div className={"project-card"}>

            <Image src={imgSrc} width="100" height="60" layout={"responsive"}
                object-fit={"none"} quality={"100"} alt={"coverImage"} className={"rounded-xl"}/>

            <div>

            </div>
            <div className={"p-4 flex flex-col align-bottom"}>
                <h1 className={"text-2xl font-bold"}>{projectTitle}</h1>
                <h3 className={"mt-4 text-xl"}>{description}</h3>
                <a href={figmaLink}> Figma 링크</a>
                <p className={"my-1 text-xl"}>작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일) </p>
                <div className={"flex items-start mt-2"}>
                    {tags.map((aTag) => (
                        <h1 className={"px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"} key={"aTag.id"}>{aTag.name}</h1>
                    ))}
                </div>
            </div>
        </div>

    )

}