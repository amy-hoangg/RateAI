import HomeBanner from "./HomeBanner/HomeBanner"

const HomePage = () => {
    return(
        <HomeSearchBar />
        <HomeFilterWindow/> 
        <HomeBanner/>
        <HomeAIList />
        <HomeBannerBestAI />
        <HomeNewsList />
        <HomeNewsLetter />
    )
}
export default HomePage