import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    const { region, season } = req.query; /**added as part of checklist_3 */

    const regions = await getListOfRegions();
    let routes = await getAllRoutes(); /**added as part of checklist_3 */
    if (region) {
        routes = routes.filter(route => route.region === region);
    }

    if (season) {
        routes = routes.filter(route => route.bestSeason === season);
    }
    const seasons = await getListOfSeasons();

    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons
    });
};