import { of } from "rxjs";
import { HeroesComponent } from "../heroes/heroes.component"

describe('HeroesComponets ', ()=>{
    let component: HeroesComponent;
    let Heroes;
    let mockHeroService;

    beforeEach(() =>{
        Heroes = [
            {id:1, name: 'SpiderDude',  strength:8},
            {id:1, name: 'WonderFul Woman',  strength:24},
            {id:1, name: 'Super Dude',  strength:55},

        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero'])
        component = new HeroesComponent(mockHeroService);
    })
    describe('delete',() => {
        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true)) 
            component.heroes = Heroes;

            component.delete(Heroes[2]);

            expect(component.heroes.length).toBe(2);
        })
        it('should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true)) 
            component.heroes = Heroes;

            component.delete(Heroes[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalled();
        })
    })
})