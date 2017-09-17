import {Component, OnInit} from '@angular/core';
import {MainData} from "./main.model";
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  navClose = false;
  mainData: MainData = {
    userData: {
      username: 'Fuybooo',
      userAvatar: './assets/img/user-header.png',
      mobilePhone: '13588888888',
      email: 'fuybooo@qq.com',
      positions: 'Web前端工程师'
    },
    menuData: [
      {
        id: '1',
        parentId: '0',
        name: '示例',
        keyword: 'demo',
        icon: 'fa-wrench',
        isExpend: false,
        children: [
          {
            id: '2',
            parentId: '1',
            name: '消息框',
            keyword: 'message',
            icon: 'fa-columns',
            url: '/app/demo/tipDemo'
          },
          {
            id: '3',
            parentId: '1',
            name: '模态框',
            keyword: 'modal',
            icon: 'fa-columns',
            url: '/app/demo/modalDemo'
          },
          {
            id: '4',
            parentId: '1',
            name: '图表',
            keyword: 'chart',
            icon: 'fa-pie-chart',
            url: '/app/demo/ngxChartDemo'
          },
          {
            id: '5',
            parentId: '1',
            name: '下拉框',
            keyword: 'select',
            icon: 'fa-circle',
            url: '/app/demo/selectDemo'
          },
          {
            id: '6',
            parentId: '1',
            name: '层次图',
            keyword: 'hierarchyView',
            icon: 'fa-css3',
            url: '/app/demo/hierarchyViewDemo'
          },
          {
            id: '7',
            parentId: '1',
            name: '图片裁剪',
            keyword: 'imgCropper',
            icon: 'fa-file-picture-o',
            url: '/app/demo/imgCropperDemo'
          },
          {
            id: '8',
            parentId: '1',
            name: '分页',
            keyword: 'pagination',
            icon: 'fa-pagelines',
            url: '/app/demo/paginationDemo'
          },
          {
            id: '9',
            parentId: '1',
            name: 'http分页',
            keyword: 'httpPagination',
            icon: 'fa-pagelines',
            url: '/app/demo/httpPaginationDemo'
          },
          {
            id: '10',
            parentId: '1',
            name: '开关按钮',
            keyword: 'switch',
            icon: 'fa-toggle-on',
            url: '/app/demo/switchDemo'
          },
          {
            id: '11',
            parentId: '1',
            name: '时间轴样式',
            keyword: 'timeline',
            icon: 'fa-clock-o',
            url: '/app/demo/timelineDemo'
          },
          {
            id: '12',
            parentId: '1',
            name: '日期选择',
            keyword: 'datePicker',
            icon: 'fa-calendar',
            url: '/app/demo/datePickerDemo'
          },
          {
            id: '13',
            parentId: '1',
            name: '树与下拉树',
            keyword: 'tree',
            icon: 'fa-tree',
            url: '/app/demo/treeDemo'
          },
          {
            id: '14',
            parentId: '1',
            name: 'ztree',
            keyword: 'ztree',
            icon: 'fa-tree',
            url: '/app/demo/ztreeDemo'
          },
          {
            id: '15',
            parentId: '1',
            name: '图片转base64',
            keyword: 'imgSelectToBase64',
            icon: 'fa-upload',
            url: '/app/demo/imgSelectToBase64Demo'
          },
          {
            id: '16',
            parentId: '1',
            name: '文件上传',
            keyword: 'fileUpload',
            icon: 'fa-upload',
            url: '/app/demo/fileUploadDemo'
          },
          {
            id: '17',
            parentId: '1',
            name: '模拟滚动条',
            keyword: 'customScrollbar',
            icon: 'fa-sliders',
            url: '/app/demo/customScrollbarDemo'
          },
          {
            id: '18',
            parentId: '1',
            name: '图片查看器',
            keyword: 'imageViewerDemo',
            icon: 'fa-image',
            url: '/app/demo/imageViewerDemo'
          },
          {
            id: '19',
            parentId: '1',
            name: 'Loading',
            keyword: 'loading',
            icon: 'fa-spinner',
            url: '/app/demo/loadingDemo'
          },
        ]
      },
      {
        id: '20',
        parentId: '0',
        name: '权限管理',
        keyword: 'authority',
        icon: 'fa-user',
        isExpend: false,
        children: [
          {
            id: '21',
            parentId: '20',
            name: '用户管理',
            keyword: 'userManagement',
            icon: 'fa-user-circle-o',
            isExpend: false,
            children: [
              {
                id: '22',
                parentId: '21',
                name: '用户添加',
                keyword: 'addUser',
                icon: 'fa-pencil-square-o',
                url: '/app/user/addUser'
              },
              {
                id: '23',
                parentId: '21',
                name: '用户列表',
                keyword: 'userList',
                icon: 'fa-list-alt',
                url: '/app/user/userList'
              }
            ]
          },
          {
            id: '24',
            parentId: '20',
            name: '角色管理',
            keyword: 'roleManagement',
            icon: 'fa-users',
            isExpend: false,
            children: [
              {
                id: '25',
                parentId: '24',
                name: '角色添加',
                keyword: 'addRole',
                icon: 'fa-plus-circle',
                url: '/app/role/addRole'
              },
              {
                id: '26',
                parentId: '24',
                name: '角色查询',
                keyword: 'roleList',
                icon: 'fa-search',
                url: '/app/role/roleList'
              },
              {
                id: '27',
                parentId: '24',
                name: '角色分配',
                keyword: 'userManagement',
                icon: 'fa-cogs',
                url: '/app/role/userManagement'
              }
            ]
          },
          {
            id: '28',
            parentId: '20',
            name: '菜单管理',
            keyword: 'menuManagement',
            icon: 'fa-tree',
            isExpend: false,
            children: [
              {
                id: '29',
                parentId: '28',
                name: '菜单添加',
                keyword: 'addMenu',
                icon: 'fa-plus-circle',
                url: '/app/menu/addMenu'
              },
              {
                id: '30',
                parentId: '28',
                name: '菜单列表',
                keyword: 'menuList',
                icon: 'fa-list-alt',
                url: '/app/menu/menuList'
              }
            ]
          }
        ]
      },
      {
        id: '31',
        parentId: '0',
        name: '系统管理',
        keyword: 'systemManagement',
        icon: 'fa-cube',
        isExpend: false,
        children: [
          {
            id: '32',
            parentId: '31',
            name: '系统日志',
            keyword: 'systemLog',
            icon: 'fa-file',
            url: '/app/system/systemLog'
          },
        ]
      }
    ]
  };
  toggleDescTip = '点击隐藏菜单';
  title = '首页';

  constructor(private router: Router,
        private appService: AppService) {
    this.appService.titleEventEmitter.subscribe(title => title && (this.title = title));
  }

  ngOnInit() {
  }

  toggleNav() {
    this.navClose = !this.navClose;
    if (this.navClose) {
      this.toggleDescTip = '点击显示菜单';
    } else {
      this.toggleDescTip = '点击隐藏菜单';
    }
  }

  toHome() {
    this.title = '首页';
    this.router.navigate(['/app/home']);
  }
}
