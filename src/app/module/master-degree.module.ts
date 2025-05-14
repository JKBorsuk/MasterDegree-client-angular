import { NgModule } from "@angular/core";
import { CustomButton } from "../components/button/custom-button.component";
import { PagePaging } from "../components/paging/page-paging.component";
import { ProductGridItem } from "../components/product/product-grid-item.component";
import { Home } from "../page/home/home.component";
import { ProductService } from "../service/product.service";
import { ProfileService } from "../service/profile.service";
import { CommonModule } from "@angular/common";
import { Headphones } from "../page/headphones/headphones.component";
import { Laptops } from "../page/laptops/laptops.component";
import { Monitors } from "../page/monitors/monitors.component";
import { CustomInput } from "../components/input/custom-input.component";
import { Login } from "../page/login/login.component";
import { Register } from "../page/register/register.component";
import { All } from "../page/all/all.component";
import { Favorites } from "../page/favorites/favorites.component";

@NgModule({
    declarations: [
        CustomInput,
        CustomButton,
        PagePaging,
        ProductGridItem,
        Home,
        Headphones,
        Laptops,
        Monitors,
        All,
        Favorites,
        Login,
        Register
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ProductService,
        ProfileService
    ],
    exports: [
        Home
    ]
})
export class MasterDegreeModule {

}