import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponentSetting, ReactComponent } from 'ng-react-component';
import { FormBuilder } from '@angular/forms';
import { DesignPropsService, DesignLibraryProp, DesignApiService } from 'meepo-idesign-share';

@Component({
    selector: 'meepo-mobile-setting',
    templateUrl: './meepo-mobile-setting.html',
    styleUrls: ['./meepo-mobile-setting.scss']
})
export class MeepoMobileSettingComponent extends ReactComponentSetting<any, any> {
    element: HTMLElement;

    item: DesignLibraryProp;
    instance: ReactComponent<any, any>;

    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2,
        _fb: FormBuilder,
        p: DesignPropsService,
        public api: DesignApiService,
    ) {
        super(_differs, _ele, _render, _fb, p);
    }

    onPropsChange() { }

    onStateChange() { }

    setSetting(com: DesignLibraryProp, instance?: any) {
        this.item = com;
        this.instance = instance;
    }
    setTopProps() {
        this._props.settingProps = null;
    }
    // 设置激活元素
    setItemProps(item: any) {
        const instance = this.api.get(item.uuid);
        this._props.setActiveSettingProps(item, instance.view.instance);
    }

    addComponent(e: any) {
        this._props.addPropsToInstanceByName(e);
    }

    removeComponent(uuid: string) {
        this._props.removePropsByUid(uuid);
    }

    toFatherProps(e: any) {
        this._props.toFatherProps();
    }
}
