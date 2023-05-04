import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectsItem from "@/components/projects/projectsItem";

export default function Projects({projects}){

    console.log(projects)

    return(
        <Layout >
            <div className={"flex flex-col justify-center min-h-screen px-5 mb-10 px-6"}>
                <Head>
                    <title> Portfolio</title>
                </Head>
                <h1 className={"text-2xl font-bold text-center sm:text-6xl"}> Projects :
                <span className={"pl-4 text-blue-500"}>{projects.results.length}</span>
                </h1>
                <div className={"grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full"}>
                    {projects.results.map((aProject) => (
                        <ProjectsItem key = {aProject.id} data = {aProject}/>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-02-22',
            'content-type': 'application/json',
            'authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property" : "Name",
                    "direction" : "ascending"
                }

            ],
            page_size: 100

        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/c1652488c5794eb199265d44e1ff8cc4/query`, options)

    const projects = await res.json()


    const projectIds = projects.results.map( (aProject) => (
        aProject.properties.Name.title[0].plain_text
    ) )

    console.log(`projectIds : ${projectIds}`)


    return {
        props: {projects},
    }
}