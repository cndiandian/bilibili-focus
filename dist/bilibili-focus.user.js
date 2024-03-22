// ==UserScript==
// @name         Bilibili专注模式
// @namespace    cndiandian/bilibili-focus
// @version      0.1
// @description  开启专注模式，专心学习，无广告、通知打扰
// @author       点点
// @homepage     https://github.com/cndiandian/bilibili-focus
// @homepageURL  https://github.com/cndiandian/bilibili-focus
// @updateURL    https://github.com/cndiandian/bilibili-focus/raw/main/dist/bilibili-focus.user.js
// @downloadURL  https://github.com/cndiandian/bilibili-focus/raw/main/dist/bilibili-focus.user.js
// @match        https://www.bilibili.com/video/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let focusBtn = document.createElement('li')
    focusBtn.className = "right-entry-item"

    const focusButtonDisabledStyle = '<a class="right-entry__outside"><svg t="1711104168907" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2308" width="21" height="21" class="right-entry-icon"><path d="M490.688 53.312c-20.608 0-43.84 3.584-62.784 16-21.12 13.76-33.28 36.096-33.28 64 0 19.84 6.08 40.32 15.872 57.984a324.48 324.48 0 0 0-243.712 297.28l-0.96 21.248c-0.896 23.04-1.728 43.2-5.952 62.464-4.992 23.04-14.272 41.152-33.088 55.296a130.368 130.368 0 0 0-52.096 104.256c0 58.88 46.336 110.848 108.8 110.848h150.4a160 160 0 0 0 313.6 0h150.4c62.4 0 108.8-51.904 108.8-110.848a130.368 130.368 0 0 0-54.656-106.24 32 32 0 1 0-40.128 49.92l4.224 3.2c16.704 12.544 26.56 32.256 26.56 53.12 0 26.24-20.352 46.848-44.8 46.848h-614.4c-24.512 0-44.8-20.608-44.8-46.848 0-20.864 9.792-40.576 26.496-53.12 34.432-25.728 49.92-59.328 57.28-92.8 5.44-25.344 6.528-52.864 7.488-76.736 0.256-6.016 0.448-11.776 0.768-17.28a260.288 260.288 0 0 1 336-235.328 32 32 0 1 0 18.56-61.184 323.072 323.072 0 0 0-14.464-4.032 122.24 122.24 0 0 0 15.872-58.048c0-27.904-12.16-50.24-33.28-64-18.944-12.416-42.112-16-62.72-16z m0 853.376a96 96 0 0 1-90.56-64h181.12a96 96 0 0 1-90.56 64z m0-725.376c-3.712 0-11.328-2.688-19.584-13.824a61.824 61.824 0 0 1-12.416-34.176 16 16 0 0 1 1.28-7.488 7.872 7.872 0 0 1 2.944-3.008c4.224-2.688 12.992-5.504 27.776-5.504 14.72 0 23.552 2.816 27.712 5.504a7.872 7.872 0 0 1 2.944 3.008 16 16 0 0 1 1.28 7.488 61.824 61.824 0 0 1-12.416 34.176c-8.256 11.136-15.808 13.824-19.52 13.824z" p-id="2309"></path><path d="M768 224a181.312 181.312 0 1 0 0 362.688A181.312 181.312 0 0 0 768 224z m-117.312 181.312c0-20.736 5.376-40.32 14.848-57.216l159.68 159.68a117.312 117.312 0 0 1-174.528-102.464z m219.776 57.216l-159.68-159.68a117.312 117.312 0 0 1 159.68 159.68z" p-id="2310"></path></svg><span class="right-entry-text">专注模式</span></a>'
    const focusButtonEnabledStyle = '<a class="right-entry__outside"><svg t="1711106614636" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3866" width="21" height="21"><path d="M449.28 58.624c18.944-12.416 42.112-16 62.72-16 20.608 0 43.776 3.584 62.72 16 21.12 13.824 33.28 36.16 33.28 64 0 23.424-8.384 47.744-21.504 67.328l7.424 1.856c22.272 5.76 33.344 8.64 34.88 16.64 1.472 8.064-9.344 15.744-30.912 31.232a256 256 0 1 0 267.392 435.264c19.712-10.368 29.568-15.488 38.656-11.904 9.152 3.648 11.712 11.2 16.96 26.368 4.672 13.44 7.104 27.84 7.104 42.432 0 58.944-46.4 110.848-108.8 110.848h-139.52a170.752 170.752 0 0 1-335.36 0H204.8c-62.4 0-108.8-51.904-108.8-110.848 0-41.024 19.328-79.68 52.16-104.32 18.816-14.08 28.032-32.192 33.088-55.232 4.16-19.264 4.992-39.36 5.952-62.464v-0.192l0.96-21.056a324.48 324.48 0 0 1 249.344-298.624A124.544 124.544 0 0 1 416 122.688c0-27.904 12.16-50.24 33.28-64z m-16.384 784a85.376 85.376 0 0 0 158.208 0H432.896z" fill="#333333" p-id="3867"></path><path d="M746.688 256a192 192 0 1 0 0 384 192 192 0 0 0 0-384zM640 448c0-13.76 2.56-26.88 7.36-39.04l138.24 138.368A106.688 106.688 0 0 1 640 448z m206.016 39.04l-138.304-138.368a106.688 106.688 0 0 1 138.24 138.24z" fill="#333333" p-id="3868"></path></svg><span class="right-entry-text">专注模式</span></a>'

    const checkRightEntryLoaded = setInterval(function () {
        if (document.querySelectorAll('.right-entry > li').length > 1) {
            clearInterval(checkRightEntryLoaded)

            let focusStatus = (localStorage.getItem('focusStatus') == 'true' ? true : false)
            focusBtn.innerHTML = focusStatus ? focusButtonEnabledStyle : focusButtonDisabledStyle
            let rightEntry = document.querySelector('.right-entry')
            let lastLi = rightEntry.lastElementChild
            rightEntry.insertBefore(focusBtn, lastLi)

            focusBtn.addEventListener("click", function () {
                toggleFocusMode()
            });

            localStorage.setItem('focusStatus', !focusStatus)
            toggleFocusMode()
        }
    }, 100);

    function toggleFocusMode() {
        let focusStatus = !(localStorage.getItem('focusStatus') == 'true' ? true : false)
        localStorage.setItem('focusStatus', focusStatus)

        let focusStyle = focusStatus ? 'none' : 'block'

        focusBtn.innerHTML = focusStatus ? focusButtonEnabledStyle : focusButtonDisabledStyle

        // 隐藏或显示所有小红点
        let redMessages = document.querySelectorAll('[class^="red-"]')
        redMessages.forEach(function (element) {
            element.style.display = focusStyle
        });

        // 隐藏或显示右侧播放列表上下的广告位
        let adReportList = document.querySelectorAll('.ad-report')
        adReportList.forEach(function (element) {
            element.style.display = focusStyle
        });

        if (document.querySelector('.rec-list')) document.querySelector('.rec-list').style.display = focusStyle // 隐藏或显示右侧播放列表下方的相关视频推荐
        if (document.querySelector('.rec-footer')) document.querySelector('.rec-footer').style.display = focusStyle // 隐藏或显示右侧播放列表下方的更多按钮
        if (document.querySelector('.pop-live-small-mode')) document.querySelector('.pop-live-small-mode').style.display = focusStyle // 隐藏或显示直播模块按钮
        if (document.querySelector('.reply-notice')) document.querySelector('.reply-notice').style.display = focusStyle == 'none' ? 'none' : '' // 隐藏或显示评论区上方的活动banner条
        if (document.querySelector('.left-entry')) document.querySelector('.left-entry').lastChild.style.display = focusStyle // 隐藏或显示下载客户端按钮
        if (document.querySelector('.next-play')) document.querySelector('.next-play').style.display = focusStyle // 隐藏或显示 接下来播放列表

        // 开启专注模式时，关闭弹幕
        // 关闭专注模式时，不会自动开启弹幕，因部分用户可能日常也不开启弹幕
        if (focusStatus) {
            const danmakuEnabled = document.querySelector('.bui-danmaku-switch-input').checked
            if (danmakuEnabled) {
                document.querySelector('.bui-danmaku-switch-input').click()
            }
        }
    }

})();