angular.module("underscore", []).factory("_", function() {
    return window._
}), angular.module("your_app_name", ["ionic", "your_app_name.common.directives", "your_app_name.app.services", "your_app_name.app.filters", "your_app_name.app.controllers", "your_app_name.auth.controllers", "your_app_name.views", "underscore", "angularMoment", "ngCordova", "monospaced.elastic"]).run(["$ionicPlatform", function(e) {
    e.ready(function() {
        window.cordova && window.cordova.plugins.Keyboard && (cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0), cordova.plugins.Keyboard.disableScroll(!0)), window.StatusBar && StatusBar.styleDefault()
    })
}]).config(["$stateProvider", "$urlRouterProvider", function(e, n) {
    e.state("app", {
        url: "/app",
        "abstract": !0,
        templateUrl: "views/app/side-menu.html"
    }).state("app.feed", {
        url: "/feed",
        views: {
            menuContent: {
                templateUrl: "views/app/feed.html",
                controller: "FeedCtrl"
            }
        },
        resolve: {
            loggedUser: ["AuthService", function(e) {
                return e.getLoggedUser()
            }],
            feed: ["FeedService", function(e) {
                var n = 1;
                return e.getFeed(n)
            }]
        }
    }).state("app.category_feed", {
        url: "/category_feed/:categoryId",
        views: {
            menuContent: {
                templateUrl: "views/app/feed.html",
                controller: "CategoryFeedCtrl"
            }
        },
        resolve: {
            loggedUser: ["AuthService", function(e) {
                return e.getLoggedUser()
            }],
            feed: ["FeedService", "$stateParams", function(e, n) {
                var t = 1;
                return e.getFeedByCategory(t, n.categoryId)
            }],
            category: ["CategoryService", "$stateParams", function(e, n) {
                return e.getCategory(n.categoryId)
            }]
        }
    }).state("app.trend_feed", {
        url: "/trend_feed/:trendId",
        views: {
            menuContent: {
                templateUrl: "views/app/feed.html",
                controller: "TrendFeedCtrl"
            }
        },
        resolve: {
            loggedUser: ["AuthService", function(e) {
                return e.getLoggedUser()
            }],
            feed: ["FeedService", "$stateParams", function(e, n) {
                var t = 1;
                return e.getFeedByTrend(t, n.trendId)
            }],
            trend: ["TrendsService", "$stateParams", function(e, n) {
                return e.getTrend(n.trendId)
            }]
        }
    }).state("app.post", {
        url: "/post/:postId",
        views: {
            menuContent: {
                templateUrl: "views/app/post/details.html",
                controller: "PostDetailsCtrl"
            }
        },
        resolve: {
            post: ["FeedService", "$stateParams", function(e, n) {
                return e.getPost(n.postId)
            }]
        }
    }).state("app.profile", {
        "abstract": !0,
        url: "/profile/:userId",
        views: {
            menuContent: {
                templateUrl: "views/app/profile/profile.html",
                controller: "ProfileCtrl"
            }
        },
        resolve: {
            loggedUser: ["AuthService", function(e) {
                return e.getLoggedUser()
            }],
            user: ["ProfileService", "$stateParams", function(e, n) {
                var t = n.userId;
                return e.getUserData(t)
            }],
            followers: ["ProfileService", "$stateParams", function(e, n) {
                var t = n.userId;
                return e.getUserFollowers(t)
            }],
            following: ["ProfileService", "$stateParams", function(e, n) {
                var t = n.userId;
                return e.getUserFollowing(t)
            }],
            posts: ["ProfileService", "$stateParams", function(e, n) {
                var t = n.userId;
                return e.getUserPosts(t)
            }],
            pictures: ["ProfileService", "$stateParams", function(e, n) {
                var t = n.userId;
                return e.getUserPictures(t)
            }]
        }
    }).state("app.profile.posts", {
        url: "/posts",
        views: {
            profileContent: {
                templateUrl: "views/app/profile/profile.details.html"
            },
            "profileSubContent@app.profile.posts": {
                templateUrl: "views/app/profile/profile.posts.html"
            }
        }
    }).state("app.profile.pics", {
        url: "/pics",
        views: {
            profileContent: {
                templateUrl: "views/app/profile/profile.details.html"
            },
            "profileSubContent@app.profile.pics": {
                templateUrl: "views/app/profile/profile.pics.html"
            }
        }
    }).state("app.profile.followers", {
        url: "/followers",
        views: {
            profileContent: {
                templateUrl: "views/app/profile/profile.followers.html",
                controller: "ProfileConnectionsCtrl"
            }
        }
    }).state("app.profile.following", {
        url: "/following",
        views: {
            profileContent: {
                templateUrl: "views/app/profile/profile.following.html",
                controller: "ProfileConnectionsCtrl"
            }
        }
    }).state("app.browse", {
        url: "/browse",
        views: {
            menuContent: {
                templateUrl: "views/app/browse.html",
                controller: "BrowseCtrl"
            }
        },
        resolve: {
            trends: ["TrendsService", function(e) {
                return e.getTrends()
            }],
            categories: ["CategoryService", function(e) {
                return e.getCategories()
            }]
        }
    }).state("app.people", {
        url: "/people",
        views: {
            menuContent: {
                templateUrl: "views/app/people.html",
                controller: "PeopleCtrl"
            }
        },
        resolve: {
            people_suggestions: ["PeopleService", function(e) {
                return e.getPeopleSuggestions()
            }],
            people_you_may_know: ["PeopleService", function(e) {
                return e.getPeopleYouMayKnow()
            }]
        }
    }).state("app.settings", {
        url: "/settings",
        views: {
            menuContent: {
                templateUrl: "views/app/profile/settings.html",
                controller: "SettingsCtrl"
            }
        }
    }).state("facebook-sign-in", {
        url: "/facebook-sign-in",
        templateUrl: "views/auth/facebook-sign-in.html",
        controller: "WelcomeCtrl"
    }).state("dont-have-facebook", {
        url: "/dont-have-facebook",
        templateUrl: "views/auth/dont-have-facebook.html",
        controller: "WelcomeCtrl"
    }).state("create-account", {
        url: "/create-account",
        templateUrl: "views/auth/create-account.html",
        controller: "CreateAccountCtrl"
    }).state("welcome-back", {
        url: "/welcome-back",
        templateUrl: "views/auth/welcome-back.html",
        controller: "WelcomeBackCtrl"
    }), n.otherwise("/facebook-sign-in")
}]), angular.module("your_app_name.common.directives", []).directive("multiBg", ["_", function(e) {
    return {
        scope: {
            multiBg: "=",
            interval: "=",
            helperClass: "@"
        },
        controller: ["$scope", "$element", "$attrs", function(n, t, o) {
            n.loaded = !1;
            var s = this;
            this.animateBg = function() {
                n.$apply(function() {
                    n.loaded = !0, t.css({
                        "background-image": "url(" + n.bg_img + ")"
                    })
                })
            }, this.setBackground = function(e) {
                n.bg_img = e
            }, e.isUndefined(n.multiBg) || (e.isArray(n.multiBg) && n.multiBg.length > 1 && !e.isUndefined(n.interval) && e.isNumber(n.interval) ? s.setBackground(n.multiBg[0]) : s.setBackground(n.multiBg[0]))
        }],
        templateUrl: "views/common/multi-bg.html",
        restrict: "A",
        replace: !0,
        transclude: !0
    }
}]).directive("bg", function() {
    return {
        restrict: "A",
        require: "^multiBg",
        scope: {
            ngSrc: "@"
        },
        link: function(e, n, t, o) {
            n.on("load", function() {
                o.animateBg()
            })
        }
    }
}).directive("showHideContainer", function() {
    return {
        scope: {},
        controller: ["$scope", "$element", "$attrs", function(e, n, t) {
            e.show = !1, e.toggleType = function(n) {
                n.stopPropagation(), n.preventDefault(), e.show = !e.show, e.$broadcast("toggle-type", e.show)
            }
        }],
        templateUrl: "views/common/show-hide-password.html",
        restrict: "A",
        replace: !1,
        transclude: !0
    }
}).directive("showHideInput", function() {
    return {
        scope: {},
        link: function(e, n, t) {
            e.$on("toggle-type", function(e, t) {
                var o = n[0];
                o.getAttribute("type");
                t || o.setAttribute("type", "password"), t && o.setAttribute("type", "text")
            })
        },
        require: "^showHideContainer",
        restrict: "A",
        replace: !1,
        transclude: !1
    }
}).directive("preImg", function() {
    return {
        restrict: "E",
        transclude: !0,
        scope: {
            ratio: "@",
            helperClass: "@"
        },
        controller: ["$scope", function(e) {
            e.loaded = !1, this.hideSpinner = function() {
                e.$apply(function() {
                    e.loaded = !0
                })
            }
        }],
        templateUrl: "views/common/pre-img.html"
    }
}).directive("spinnerOnLoad", function() {
    return {
        restrict: "A",
        require: "^preImg",
        scope: {
            ngSrc: "@"
        },
        link: function(e, n, t, o) {
            n.on("load", function() {
                o.hideSpinner()
            })
        }
    }
}).directive("triggerUnfollow", ["$timeout", "$ionicListDelegate", function(e, n) {
    return {
        restrict: "A",
        require: ["^^ionItem", "^?ionList"],
        scope: {},
        link: function(n, t, o, s) {
            var i = s[0],
                a = s[1];
            e(function() {
                var e = i.$element[0].getElementsByClassName("item-options"),
                    n = i.$element[0].getElementsByClassName("item-content"),
                    o = e[0].offsetWidth || 0;
                t.on("click", function() {
                    a.closeOptionButtons(), ionic.requestAnimationFrame(function() {
                        n[0].style[ionic.CSS.TRANSFORM] = "translate3d(-" + o + "px, 0px, 0px)", n[0].$$ionicOptionsOpen = !0
                    })
                })
            }, 0)
        }
    }
}]).directive("socialShare", ["$cordovaSocialSharing", "$ionicPlatform", "$timeout", function(e, n, t) {
    return {
        restrict: "A",
        scope: {
            share: "="
        },
        controller: ["$scope", function(e) {}],
        link: function(o, s, i, a) {
            o.disabled = !1;
            var r = o.share;
            o.disable = function() {
                o.disabled = !0, t(function() {
                    s.attr("disabled", o.disabled)
                }, 0)
            }, o.enable = function() {
                o.disabled = !1, t(function() {
                    s.attr("disabled", o.disabled)
                }, 0)
            }, s.on("click", function(t) {
                o.disabled ? (t.preventDefault(), t.stopImmediatePropagation()) : (o.disable(), n.ready(function() {
                    try {
                        e.share("Check the following post: " + r.title, null, null, null).then(function(e) {
                            o.enable()
                        }, function(e) {
                            o.enable()
                        })
                    } catch (n) {
                        o.enable()
                    }
                }))
            })
        }
    }
}]).directive("dynamicAnchorFix", ["$ionicGesture", "$timeout", "$cordovaInAppBrowser", function(e, n, t) {
    return {
        scope: {},
        link: function(e, o, s) {
            n(function() {
                var e = o.find("a");
                e.length > 0 && angular.forEach(e, function(e) {
                    var n = angular.element(e);
                    n.bind("click", function(e) {
                        e.preventDefault(), e.stopPropagation();
                        var n = e.currentTarget.href,
                            o = {};
                        t.open(n, "_blank", o).then(function(e) {})["catch"](function(e) {
                            console.log("error: " + e)
                        })
                    })
                })
            }, 10)
        },
        restrict: "A",
        replace: !1,
        transclude: !1
    }
}]), angular.module("your_app_name.auth.controllers", [])

.controller("WelcomeCtrl", ["$scope", "$state", "$ionicModal", "$ionicPopup", "$ionicLoading", "$http", function(e, n, t) {
    e.bgs = ["img/welcome-bg.jpg"], 
    e.facebookSignIn = function() {
        console.log("doing facebook sign in"), n.go("app.feed")
    }, t.fromTemplateUrl("views/app/legal/privacy-policy.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(n) {
        e.privacy_policy_modal = n
    }), t.fromTemplateUrl("views/app/legal/terms-of-service.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(n) {
        e.terms_of_service_modal = n
    }), e.showPrivacyPolicy = function() {
        e.privacy_policy_modal.show()
    }, e.showTerms = function() {
        e.terms_of_service_modal.show()
    }, e.doSignUp = function(contactform, formData) {
          
        var url = 'http://www.nutrivirtual.com.br/aplicativo/cadastro/?callback=JSON_CALLBACK&nome='+formData['nome']+'&estado='+formData['estado']+'&cidade='+formData['cidade']+'&email='+formData['email']+'&telefone='+formData['telefone'];
        
        var teste = $this.getUserData(t);

        console.log(teste); 




    },e.submit = function(contactform, formData) {
         
     }


}])

.controller("CreateAccountCtrl", ["$scope", "$state", function(e, n) {
    e.doSignUp = function() {
        console.log("doing sign up"), n.go("app.feed")
    }
}]).controller("WelcomeBackCtrl", ["$scope", "$state", "$ionicModal", function(e, n, t) {
    e.doLogIn = function() {
        console.log("doing log in"), n.go("app.feed")
    }, t.fromTemplateUrl("views/auth/forgot-password.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(n) {
        e.forgot_password_modal = n
    }), e.showForgotPassword = function() {
        e.forgot_password_modal.show()
    }, e.requestNewPassword = function() {
        console.log("requesting new password")
    }
}]).controller("ForgotPasswordCtrl", ["$scope", function(e) {}]), angular.module("your_app_name.app.controllers", []).controller("ProfileCtrl", ["$scope", "$ionicHistory", "$state", "$ionicScrollDelegate", "loggedUser", "user", "followers", "following", "posts", "pictures", function(e, n, t, o, s, i, a, r, l, c) {
    e.$on("$ionicView.afterEnter", function() {
        o.$getByHandle("profile-scroll").resize()
    }), e.currentUserId = i.id, e.user = i, e.myProfile = s.id == i.id, e.user.followers = a, e.user.following = r, e.user.posts = l, e.user.pictures = c, e.getUserPics = function() {
        n.currentView(n.backView()), n.nextViewOptions({
            disableAnimate: !0
        }), t.go("app.profile.pics", {
            userId: i.id
        })
    }, e.getUserPosts = function() {
        n.currentView(n.backView()), n.nextViewOptions({
            disableAnimate: !0
        }), t.go("app.profile.posts", {
            userId: i.id
        })
    }
}]).controller("ProfileConnectionsCtrl", ["$scope", function(e) {}]).controller("CommentsCtrl", ["$scope", "$state", "$ionicPopup", "FeedService", function(e, n, t, o) {
    var s = {};
    e.showComments = function(n) {
        o.getPostComments(n).then(function(o) {
            n.comments_list = o, s = t.show({
                cssClass: "popup-outer comments-view",
                templateUrl: "views/app/partials/comments.html",
                scope: angular.extend(e, {
                    current_post: n
                }),
                title: n.comments + " Comments",
                buttons: [{
                    text: "",
                    type: "close-popup ion-ios-close-outline"
                }]
            })
        })
    }, e.navigateToUserProfile = function(e) {
        s.close(), n.go("app.profile.posts", {
            userId: e.id
        })
    }
}]).controller("NewPostCtrl", ["$scope", "$ionicModal", "$ionicLoading", "$timeout", "$cordovaImagePicker", "$ionicPlatform", "GooglePlacesService", function(e, n, t, o, s, i, a) {
    e.status_post = {
        audience: "public",
        text: "",
        images: [],
        location: ""
    }, n.fromTemplateUrl("views/app/partials/new_status_post.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(n) {
        e.new_status_post_modal = n
    }), n.fromTemplateUrl("views/app/partials/checkin_status_post.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(n) {
        e.checkin_status_post_modal = n
    }), e.newStatusPost = function() {
        e.new_status_post_modal.show()
    }, e.newImageStatusPost = function() {
        e.new_status_post_modal.show(), e.openImagePicker()
    }, e.openImagePicker = function() {
        i.ready(function() {
            s.getPictures().then(function(n) {
                for (var t = 0; t < n.length; t++) console.log("Image URI: " + n[t]), e.status_post.images.push(n[t])
            }, function(e) {})
        })
    }, e.removeImage = function(n) {
        e.status_post.images = _.without(e.status_post.images, n)
    }, e.closeStatusPost = function() {
        e.new_status_post_modal.hide()
    }, e.closeCheckInModal = function() {
        e.predictions = [], e.checkin_status_post_modal.hide()
    }, e.checkinStatusPost = function() {
        e.new_status_post_modal.hide(), e.checkin_status_post_modal.show(), e.search = {
            input: ""
        }
    }, e.getPlacePredictions = function(n) {
        "" !== n ? a.getPlacePredictions(n).then(function(n) {
            e.predictions = n
        }) : e.predictions = []
    }, e.selectSearchResult = function(n) {
        e.search.input = n.description, e.predictions = [], e.closeCheckInModal(), e.new_status_post_modal.show(), e.status_post.location = n.terms[0].value
    }, e.$on("$destroy", function() {
        e.new_status_post_modal.remove()
    }), e.postStatus = function() {
        t.show({
            template: "Posting ..."
        }), console.log("Posting status", e.status_post), o(function() {
            t.hide(), e.closeStatusPost()
        }, 1e3)
    }
}]).controller("CategoryFeedCtrl", ["$scope", "_", "FeedService", "$stateParams", "loggedUser", "feed", "category", function(e, n, t, o, s, i, a) {
    e.loggedUser = s, e.cards = i.posts, e.current_category = a, e.page = 1, e.totalPages = i.totalPages;
    var r = o.categoryId;
    e.is_category_feed = !0, e.getNewData = function() {
        e.$broadcast("scroll.refreshComplete")
    }, e.loadMoreData = function() {
        e.page += 1, console.log("Get categories feed"), t.getFeedByCategory(e.page, r).then(function(n) {
            e.totalPages = n.totalPages, e.cards = e.cards.concat(n.posts), e.$broadcast("scroll.infiniteScrollComplete")
        })
    }, e.moreDataCanBeLoaded = function() {
        return e.totalPages > e.page
    }
}]).controller("TrendFeedCtrl", ["$scope", "_", "FeedService", "$stateParams", "loggedUser", "feed", "trend", function(e, n, t, o, s, i, a) {
    e.loggedUser = s, e.cards = i.posts, e.current_trend = a, e.page = 1, e.totalPages = i.totalPages;
    var r = o.trendId;
    e.is_trend_feed = !0, e.getNewData = function() {
        e.$broadcast("scroll.refreshComplete")
    }, e.loadMoreData = function() {
        e.page += 1, console.log("Get trends feed"), t.getFeedByTrend(e.page, r).then(function(n) {
            e.totalPages = n.totalPages, e.cards = e.cards.concat(n.posts), e.$broadcast("scroll.infiniteScrollComplete")
        })
    }, e.moreDataCanBeLoaded = function() {
        return e.totalPages > e.page
    }
}]).controller("FeedCtrl", ["$scope", "_", "FeedService", "$stateParams", "loggedUser", "feed", function(e, n, t, o, s, i) {
    e.loggedUser = s, e.cards = i.posts, e.page = 1, e.totalPages = i.totalPages, e.is_category_feed = !1, e.is_trend_feed = !1, e.getNewData = function() {
        e.$broadcast("scroll.refreshComplete")
    }, e.loadMoreData = function() {
        e.page += 1, t.getFeed(e.page).then(function(n) {
            e.totalPages = n.totalPages, e.cards = e.cards.concat(n.posts), e.$broadcast("scroll.infiniteScrollComplete")
        })
    }, e.moreDataCanBeLoaded = function() {
        return e.totalPages > e.page
    }
}]).controller("PeopleCtrl", ["$scope", "people_suggestions", "people_you_may_know", function(e, n, t) {
    e.people_suggestions = n, e.people_you_may_know = t
}]).controller("BrowseCtrl", ["$scope", "trends", "categories", function(e, n, t) {
    e.trends = n, e.categories = t
}]).controller("AppCtrl", ["$scope", "$ionicModal", "$timeout", "AuthService", function(e, n, t, o) {
    e.loginData = {}, n.fromTemplateUrl("views/login.html", {
        scope: e
    }).then(function(n) {
        e.modal = n
    }), e.closeLogin = function() {
        e.modal.hide()
    }, e.login = function() {
        e.modal.show()
    }, e.doLogin = function() {
        console.log("Doing login", e.loginData), t(function() {
            e.closeLogin()
        }, 1e3)
    }
}]).controller("EmailComposerCtrl", ["$scope", "$cordovaEmailComposer", "$ionicPlatform", function(e, n, t) {
    e.sendMail = function() {
        t.ready(function() {
            n.isAvailable().then(function() {
                console.log("Is available"), n.open({
                    to: "hi@startapplabs.com",
                    subject: "Nice Theme!",
                    body: "How are you? Nice greetings from Social App"
                }).then(null, function() {})
            }, function() {
                console.log("Not available")
            })
        })
    }
}]).controller("SettingsCtrl", ["$scope", "$ionicModal", function(e, n) {
    n.fromTemplateUrl("views/app/legal/terms-of-service.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(n) {
        e.terms_of_service_modal = n
    }), n.fromTemplateUrl("views/app/legal/privacy-policy.html", {
        scope: e,
        animation: "slide-in-up"
    }).then(function(n) {
        e.privacy_policy_modal = n
    }), e.showTerms = function() {
        e.terms_of_service_modal.show()
    }, e.showPrivacyPolicy = function() {
        e.privacy_policy_modal.show()
    }
}]).controller("AppRateCtrl", ["$scope", function(e) {
    e.appRate = function() {
        ionic.Platform.isIOS() ? (AppRate.preferences.storeAppURL.ios = "1234555553>", AppRate.promptForRating(!0)) : ionic.Platform.isAndroid() && (AppRate.preferences.storeAppURL.android = "market://details?id=ionTheme3", AppRate.promptForRating(!0))
    }
}]).controller("PostDetailsCtrl", ["$scope", "post", "FeedService", "$ionicPopup", function(e, n, t, o) {
    e.post = n
}]), angular.module("your_app_name.app.services", []).service("AuthService", ["$http", "$q", function(e, n) {
    this.getLoggedUser = function() {
        var t = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.find(e.users, function(e) {
                return 0 == e.id
            });
            t.resolve(n)
        }), t.promise
    }
}]).service("ProfileService", ["$http", "$q", function(e, n) {
    this.getUserData = function(t) {
        var o = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.find(e.users, function(e) {
                return e.id == t
            });
            o.resolve(n)
        }), o.promise
    }, this.getUserFollowers = function(t) {
        var o = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.filter(e.following, function(e) {
                    return e.followsId == t
                }),
                s = _.uniq(_.pluck(n, "userId")),
                i = _.map(s, function(n) {
                    return {
                        userId: n,
                        userData: _.find(e.users, function(e) {
                            return e.id == n
                        }),
                        follow_back: !_.isUndefined(_.find(e.following, function(e) {
                            return e.userId === t && e.followsId === n
                        }))
                    }
                });
            o.resolve(i)
        }), o.promise
    }, this.getUserFollowing = function(t) {
        var o = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.filter(e.following, function(e) {
                    return e.userId == t
                }),
                s = _.uniq(_.pluck(n, "followsId")),
                i = _.map(s, function(n) {
                    return {
                        userId: n,
                        userData: _.find(e.users, function(e) {
                            return e.id == n
                        })
                    }
                });
            o.resolve(i)
        }), o.promise
    }, this.getUserPictures = function(t) {
        var o = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.filter(e.users_pictures, function(e) {
                return e.userId == t
            });
            o.resolve(n)
        }), o.promise
    }, this.getUserPosts = function(t) {
        var o = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.filter(e.posts, function(e) {
                return e.userId == t
            });
            o.resolve(n)
        }), o.promise
    }
}]).service("FeedService", ["$http", "$q", function(e, n) {
    this.getFeed = function(t) {
        var o = 5,
            s = o * (t - 1),
            i = 1,
            a = 1,
            r = n.defer();
        return e.get("database.json").success(function(e) {
            i = e.posts.length, a = i / o;
            var n = _.sortBy(e.posts, function(e) {
                    return new Date(e.date)
                }),
                t = n.slice(s, s + o),
                l = _.each(t.reverse(), function(n) {
                    return n.user = _.find(e.users, function(e) {
                        return e.id == n.userId
                    }), n
                });
            r.resolve({
                posts: l,
                totalPages: a
            })
        }), r.promise
    }, this.getFeedByCategory = function(t, o) {
        var s = 5,
            i = s * (t - 1),
            a = 1,
            r = 1,
            l = n.defer();
        return e.get("database.json").success(function(e) {
            a = e.posts.length, r = a / s;
            var n = _.sortBy(e.posts, function(e) {
                return new Date(e.date)
            });
            o && (n = _.filter(n, function(e) {
                return e.category.id == o
            }));
            var t = n.slice(i, i + s),
                c = _.each(t.reverse(), function(n) {
                    return n.user = _.find(e.users, function(e) {
                        return e.id == n.userId
                    }), n
                });
            l.resolve({
                posts: c,
                totalPages: r
            })
        }), l.promise
    }, this.getFeedByTrend = function(t, o) {
        var s = 5,
            i = s * (t - 1),
            a = 1,
            r = 1,
            l = n.defer();
        return e.get("database.json").success(function(e) {
            a = e.posts.length, r = a / s;
            var n = _.sortBy(e.posts, function(e) {
                return new Date(e.date)
            });
            o && (n = _.filter(n, function(e) {
                return e.trend.id == o
            }));
            var t = n.slice(i, i + s),
                c = _.each(t.reverse(), function(n) {
                    return n.user = _.find(e.users, function(e) {
                        return e.id == n.userId
                    }), n
                });
            l.resolve({
                posts: c,
                totalPages: r
            })
        }), l.promise
    }, this.getPostComments = function(t) {
        var o = n.defer();
        return e.get("database.json").success(function(e) {
            var n = e.users;
            n = window.knuthShuffle(n.slice(0, t.comments));
            var s = [];
            s = _.map(n, function(n) {
                var t = {
                    user: n,
                    text: e.comments[Math.floor(Math.random() * e.comments.length)].comment
                };
                return t
            }), o.resolve(s)
        }), o.promise
    }, this.getPost = function(t) {
        var o = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.find(e.posts, function(e) {
                return e.id == t
            });
            n.user = _.find(e.users, function(e) {
                return e.id == n.userId
            }), o.resolve(n)
        }), o.promise
    }
}]).service("PeopleService", ["$http", "$q", function(e, n) {
    this.getPeopleSuggestions = function() {
        var t = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.each(e.people_suggestions, function(n) {
                n.user = _.find(e.users, function(e) {
                    return e.id == n.userId
                });
                var t = _.filter(e.users_pictures, function(e) {
                    return e.userId == n.userId
                });
                return n.user.pictures = _.last(t, 3), n
            });
            t.resolve(n)
        }), t.promise
    }, this.getPeopleYouMayKnow = function() {
        var t = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.each(e.people_you_may_know, function(n) {
                return n.user = _.find(e.users, function(e) {
                    return e.id == n.userId
                }), n
            });
            t.resolve(n)
        }), t.promise
    }
}]).service("TrendsService", ["$http", "$q", function(e, n) {
    this.getTrends = function() {
        var t = n.defer();
        return e.get("database.json").success(function(e) {
            t.resolve(e.trends)
        }), t.promise
    }, this.getTrend = function(t) {
        var o = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.find(e.trends, function(e) {
                return e.id == t
            });
            o.resolve(n)
        }), o.promise
    }
}]).service("CategoryService", ["$http", "$q", function(e, n) {
    this.getCategories = function() {
        var t = n.defer();
        return e.get("database.json").success(function(e) {
            t.resolve(e.categories)
        }), t.promise
    }, this.getCategory = function(t) {
        var o = n.defer();
        return e.get("database.json").success(function(e) {
            var n = _.find(e.categories, function(e) {
                return e.id == t
            });
            o.resolve(n)
        }), o.promise
    }
}]).service("GooglePlacesService", ["$q", function(e) {
    this.getPlacePredictions = function(n) {
        var t = e.defer(),
            o = new google.maps.places.AutocompleteService;
        return o.getPlacePredictions({
            input: n
        }, function(e, n) {
            n != google.maps.places.PlacesServiceStatus.OK ? t.resolve([]) : t.resolve(e)
        }), t.promise
    }
}]), angular.module("your_app_name.app.filters", []).filter("cleanUrl", function() {
    return function(e) {
        return e ? e.replace("www.", "").replace("https://", "").replace("http://", "") : void 0
    }
}), angular.module("your_app_name.views", []).run(["$templateCache", function(e) {

        e.put("views/app/browse.html", '<ion-view class="browse-view" view-title="Browse">\n  <ion-content>\n    <div class="list">\n      <div class="item item-divider">\n        <i class="icon ion-arrow-graph-up-right"></i> Trending\n      </div>\n      <div ng-repeat="trend in trends" class="trend-item">\n        <a ui-sref="app.trend_feed({ trendId: trend.id })" class="trend-anchor">\n          <div multi-bg="[trend.image]" interval="3000" helper-class="category-with-image">\n            <h1 class="trend-title">{{trend.name}}</h1>\n          </div>\n        </a>\n      </div>\n      <div class="item item-divider">\n        <i class="icon ion-grid"></i> Categories\n      </div>\n      <div class="row categories-outer">\n        <div ng-repeat="category in categories" class="col col-50 category-item-outer">\n          <a ui-sref="app.category_feed({ categoryId: category.id })">\n            <div class="category-item-wrapper">\n              <div class="category-item-content" ng-init="bg_img = category.image">\n                <div multi-bg="[bg_img]" interval="3000" helper-class="category-with-image">\n                  <h1 class="category-title">{{category.name}}</h1>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n'), 
        e.put("views/app/feed.html", '<ion-view class="feed-view" ng-class="{\'filtered-feed\': (is_trend_feed || is_category_feed)}">\n    <ion-nav-title>\n        <span ng-if="is_category_feed">{{ current_category.name }} Nutrivirtual     </span>\n        <span ng-if="is_trend_feed">{{ current_trend.name }} Nutrivirtual     </span>\n        <span ng-if="!is_trend_feed && !is_category_feed">Nutrivirtual     </span>\n    </ion-nav-title>\n    <ion-content>\n        <!-- Refresh to get the new posts -->\n        <ion-refresher pulling-text="Puxe para atualizar..." on-refresh="getNewData()">\n        </ion-refresher>\n\n        <div ng-if="is_trend_feed || is_category_feed" class="row filtered-feed-header-outer">\n            <div ng-if="is_category_feed" class="col filtered-feed-header">\n                <div multi-bg="[current_category.image]" interval="3000" helper-class="category-with-image">\n                    <div class="filtered-feed-header-content">\n                        <h2 class="header-title">{{ current_category.name }}             </h2>\n                    </div>\n                </div>\n            </div>\n            <div ng-if="is_trend_feed" class="col filtered-feed-header">\n                <div multi-bg="[current_trend.image]" interval="3000" helper-class="category-with-image">\n                    <div class="filtered-feed-header-content">\n                        <h2 class="header-title">{{ current_trend.name }}             </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div ng-if="!is_trend_feed && !is_category_feed" ng-controller="NewPostCtrl" class="card new-post">\n            <div class="item item-avatar">\n                <div class="card-avatar-image-outer">\n                    <pre-img ratio="_1_1" helper-class="avatar-image">\n                        <img ng-src="{{loggedUser.picture}}" spinner-on-load>\n                    </pre-img>\n                </div>\n                <a class="new-post-call-to-action" ng-click="newStatusPost()">\n                    <h3 class="new-post-copy">Mande uma mensagem para a nutri !           </h3>\n                </a>\n            </div>\n            <div class="item tabs tabs-icon-left">\n                <a class="tab-item" ng-click="newStatusPost()">\n                    <i class="icon ion-ios-chatboxes">           </i>\n          CHAT \n                </a>\n                           <a class="tab-item" ng-click="checkinStatusPost()">\n                    <i class="icon ion-android-document">           </i>\n          Postagens Pessoais\n                </a>\n            </div>\n        </div>\n\n        <div class="feed-cards-outer">\n            <div ng-if="cards.length > 0" ng-repeat="card in cards" class="post-card-outer">\n                <!-- <section ng-include="\'views/app/partials/feed-post-card.html\'" class="post-card-outer"></section> -->\n                <section ng-include="\'views/app/partials/feed-post-card.html\'">         </section>\n            </div>\n            <div ng-if="cards.length == 0" class="row row-center empty-feed-outer">\n                <div class="col">\n                    <i class="empty-feed-icon icon ion-sad-outline">           </i>\n                    <h2 class="empty-feed-text">No posts here           </h2>\n                </div>\n            </div>\n        </div>\n\n        <!-- Infinit scroll -->\n        <ion-infinite-scroll ng-if="moreDataCanBeLoaded()" on-infinite="loadMoreData()" distance="2%">\n        </ion-infinite-scroll>\n    </ion-content>\n </ion-view>\n'), 
        e.put("views/app/people.html", '<ion-view class="people-view" view-title="People">\n  <ion-content>\n\n    <div class="item item-divider">\n      People Suggestions\n    </div>\n\n    <div class="suggested-people-cards">\n      <div class="suggested-people card" ng-repeat="suggestion in people_suggestions">\n        <div class="row">\n          <div class="col col-center col-user-image">\n            <!-- We need a wrapper with width set for the preload image directive -->\n            <div class="user-image-outer">\n              <a ui-sref="app.profile.posts({userId: suggestion.user.id})">\n                <pre-img ratio="_1_1" helper-class="square-image">\n                  <img class="user-image" ng-src="{{suggestion.user.picture}}" spinner-on-load>\n                      </pre-img>\n              </a>\n            </div>\n          </div>\n          <div class="col col-center">\n            <div class="row user-data">\n              <div class="col">\n                <a class="username" ui-sref="app.profile.posts({userId: suggestion.user.id})">{{suggestion.user.username}}</a>\n                <span class="name">{{suggestion.user.name.first}} {{suggestion.user.name.last}}</span>\n              </div>\n              <div class="action-col">\n                <a class="button button-small button-outline hide-button">\n                  Hide\n                </a>\n                <a class="button button-small button-outline follow-button">\n                  Follow\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="row user-related-content">\n          <div class="col" ng-repeat="user_picture in suggestion.user.pictures">\n            <pre-img ratio="_1_1" helper-class="user-related-image">\n              <img class="user-preview-image" ng-src="{{user_picture.picture}}" spinner-on-load>\n            </pre-img>\n          </div>\n        </div>\n        <div class="row user-relation">\n          <div class="col">\n            <span class="relation">{{suggestion.connection}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="item item-divider">\n      People You May Know\n    </div>\n\n    <div class="suggested-people-list">\n      <div class="suggested-people row" ng-repeat="person in people_you_may_know">\n        <div class="col col-center col-user-image">\n          <!-- We need a wrapper with width set for the preload image directive -->\n          <div class="user-image-outer">\n            <a ui-sref="app.profile.posts({userId: person.user.id})">\n              <pre-img ratio="_1_1" helper-class="square-image">\n                <img class="user-image" ng-src="{{person.user.picture}}" spinner-on-load>\n              </pre-img>\n            </a>\n          </div>\n        </div>\n        <div class="col col-center">\n          <div class="row user-data">\n            <div class="col">\n              <a class="name" ui-sref="app.profile.posts({userId: person.user.id})">{{person.user.name.first}} {{person.user.name.last}}</a>\n              <span class="brief-info">{{person.mutual_friends}} mutual friends</span>\n            </div>\n            <div class="action-col col-center">\n              <a class="button button-small button-outline button-block follow-button">\n                Follow\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n'),
        e.put("views/app/side-menu.html", '<ion-side-menus enable-menu-with-back-views="false">\n <ion-side-menu-content>\n\n <ion-nav-bar class="app-bar">\n <ion-nav-back-button>\n </ion-nav-back-button>\n <ion-nav-buttons side="left">\n <button class="button button-icon button-clear ion-navicon" menu-toggle="left">\n </button>\n </ion-nav-buttons>\n </ion-nav-bar>\n <ion-nav-view name="menuContent"> </ion-nav-view>\n </ion-side-menu-content>\n\n <ion-side-menu side="left">\n <ion-content has-bouncing="false" scroll="false" class="menu-outer left-menu">\n <ion-list class="menu-items-list">\n <div class="row">\n <div class="col col-center">\n <ion-item ui-sref-active="active" class="item-icon-left item-icon-right" menu-close ui-sref="app.feed">\n <i class="menu-icon icon ion-earth"> </i>\n <h2 class="menu-text">Publicações </h2>\n <i class="item-pointer-icon icon ion-chevron-right"> </i>\n </ion-item>\n <!-- <ion-item ui-sref-active="active" class="item-icon-left item-icon-right" menu-close ui-sref="app.people">\n <i class="menu-icon icon ion-person-stalker"> </i>\n <h2 class="menu-text">Loja Nutri </h2>\n <i class="item-pointer-icon icon ion-chevron-right"> </i>\n </ion-item>\n <ion-item ui-sref-active="active" class="item-icon-left item-icon-right" menu-close ui-sref="app.browse">\n <i class="menu-icon icon ion-ios-albums-outline"> </i>\n <h2 class="menu-text">Categorias </h2>\n <i class="item-pointer-icon icon ion-chevron-right"> </i>\n </ion-item>\n  --> </div>\n </div>\n <div class="row menu-bottom-options">\n <!-- <div class="col col-top">\n               \n <ion-item ui-sref-active="active" ng-class="{\'active\': (\'app.profile\' | includedByState)}" class="item-icon-left item-icon-right" menu-close ui-sref="app.profile.posts({userId: 0})">\n <i class="menu-icon icon ion-happy-outline"> </i>\n <h2 class="menu-text">Meu Perfil </h2>\n <i class="item-pointer-icon icon ion-chevron-right"> </i>\n </ion-item>\n </div>\n --> </div>\n </ion-list>\n </ion-content>\n </ion-side-menu>\n </ion-side-menus>\n'), 
        e.put("views/auth/create-account.html", ''),
        e.put("views/auth/dont-have-facebook.html", '<ion-view class="auth-view" cache-view="false">\n <ion-nav-bar class="view-navigation">\n <ion-nav-back-button>\n        </ion-nav-back-button>\n </ion-nav-bar>\n <ion-content class="padding">\n <div class="row form-heading">\n <div class="col">\n <h1 class="form-title">Criar uma Conta         </h1>\n </div>\n </div>\n <div class="row form-separator">\n <hr class="separator-line"/>\n <span class="separator-mark">        </span>\n <hr class="separator-line"/>\n </div>\n <div class="row form-wrapper">\n <div class="col">\n <form name="signup_form" class="" ng-submit="cadastrarse(contactform, formData)" novalidate>\n <div class="form-fields-outer list list-inset">\n <label class="item item-input">\n <input type="text" placeholder="Nome" name="nome" ng-model="formData.nome" required>\n </label>\n <div class="row multi-inputs">\n <div class="col">\n <label class="item item-input">\n <input class="multi-input" type="text" placeholder="Estado" name="estado" ng-model="formData.estado"  required>\n </label>\n </div>\n <div class="col">\n <label class="item item-input">\n <input class="multi-input" type="text" placeholder="Cidade" name="cidade" ng-model="formData.cidade"  required>\n </label>\n </div>\n </div>\n <label class="item item-input">\n <input type="email" placeholder="Email" name="email" ng-model="formData.email" required>\n </label>\n <label class="item item-input">\n <input type="tel" placeholder="Telefone" name="phone" ng-model="formData   .telefone" required>\n </label>\n <label class="item item-input" show-hide-container>\n <input type="password" placeholder="Senha" name="password" ng-model="formData.password" required show-hide-input>\n </label>\n <button type="submit" class="sign-up button button-block" ng-click="doSignUp(contactform, formData)" ng-disabled="signup_form.$invalid">\n              Cadastrar-se\n </button>\n <p ng-show="error" class="message error">{{error}}             </p>\n </div>\n </form>\n </div>\n </div>\n </ion-content>\n </ion-view>\n'), 
        e.put("views/auth/facebook-sign-in.html", '<ion-view class="welcome-view" cache-view="false">\n        <ion-nav-bar>\n                <ion-nav-back-button>\n                </ion-nav-back-button>\n                <ion-nav-buttons side="right">\n                        <a class="button button-clear button-light" ui-sref="app.feed">\n        Apenas Entrar\n                        </a>\n                </ion-nav-buttons>\n        </ion-nav-bar>\n        <ion-content scroll="false">\n                <div multi-bg="bgs" interval="3000" helper-class="facebook-welcome-bg">\n                        <div class="top-content row">\n                                <div class="app-copy col col-center">\n                                        <img src="img/logo.png">\n                                                 </div>\n                        </div>\n                        <div class="bottom-content row">\n                                <div class="col col-bottom">\n                                               <a class="facebook-sign-in button-large button button-block" ui-sref="dont-have-facebook">\n            Cadastrar-se \n                                        </a>\n                                        <section ng-include="\'views/app/legal/legal-notice.html\'">                               </section>\n                                </div>\n                        </div>\n                </div>\n        </ion-content>\n </ion-view>\n  '), 
        e.put("views/auth/forgot-password.html", '<ion-modal-view class="auth-view modal-view">\n    <ion-header-bar>\n              <h1 class="title modal-title">Recover password</h1>\n           <a class="button button-clear" ng-click="forgot_password_modal.hide()">Cancel</a>\n     </ion-header-bar>\n     <ion-content class="padding">\n         <div class="row form-heading">\n      <div class="col">\n                               <h3 class="form-sub-title">Enter the email for your account</h3>\n                      </div>\n                </div>\n                <div class="row form-wrapper">\n      <div class="col">\n                               <form name="recover_password_form" class="" novalidate>\n                                       <div class="form-fields-outer list list-inset">\n                                               <label class="item item-input">\n                                                       <input type="email" placeholder="Email" name="email" ng-model="user.email" required>\n                                          </label>\n                                              <button type="submit" class="recover-password button button-block" ng-click="requestNewPassword()" ng-disabled="recover_password_form.$invalid">\n                                                      Recover\n                                               </button>\n                                             <p ng-show="error" class="message error">{{error}}</p>\n                                                <p ng-show="message" class="message">{{message}}</p>\n                                  </div>\n                                </form>\n                       </div>\n                </div>\n        </ion-content>\n</ion-modal-view>\n'), 
        e.put("views/auth/welcome-back.html", '<ion-view class="auth-view" cache-view="false">\n  <ion-nav-bar class="view-navigation">\n    <ion-nav-back-button>\n    </ion-nav-back-button>\n  </ion-nav-bar>\n  <ion-content class="padding">\n    <div class="row form-heading">\n      <div class="col">\n        <h1 class="form-title">Welcome back</h1>\n        <h3 class="form-sub-title">Login to your account to start</h3>\n        <div class="social-sign-up button-bar">\n          <a class="button icon ion-social-facebook button-positive"></a>\n          <a class="button icon ion-social-twitter button-calm"></a>\n        </div>\n      </div>\n    </div>\n    <div class="row form-separator">\n      <hr class="separator-line"/>\n      <span class="separator-mark">OR</span>\n      <hr class="separator-line"/>\n    </div>\n    <div class="row form-wrapper">\n      <div class="col">\n        <form name="login_form" class="" novalidate>\n          <div class="form-fields-outer list list-inset">\n            <label class="item item-input">\n              <input type="text" placeholder="Username" name="username" ng-model="user.userName" required>\n            </label>\n            <label class="item item-input" show-hide-container>\n              <input type="password" placeholder="Password" name="password" ng-model="user.password" required show-hide-input>\n            </label>\n            <button type="submit" class="login button button-block" ng-click="doLogIn()" ng-disabled="login_form.$invalid">\n              Login\n            </button>\n            <p ng-show="error" class="message error">{{error}}</p>\n          </div>\n        </form>\n        <div class="alternative-actions">\n          <a class="forgot-password button button-clear button-block" ng-click="showForgotPassword()">\n            Forgot your password?\n          </a>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n'), 
        e.put("views/common/multi-bg.html", '<div class="multi-bg-outer" ng-class="{ \'finish-loading\': loaded }">\n       <img bg class="multi-bg {{ helperClass }}" ng-src="{{ bg_img }}"/>\n    <span class="bg-overlay"></span>\n      <ion-spinner ng-show="!loaded" class="spinner-on-load"></ion-spinner>\n <!-- <span ng-show="!loaded" class="spinner-on-load ion-load-c"></span> -->\n   <ng-transclude></ng-transclude>\n</div>\n'), 
        e.put("views/common/pre-img.html", '<div class="pre-img {{ratio}} {{ helperClass }}" ng-class="{ \'finish-loading\': loaded }">\n  <ion-spinner ng-show="!loaded" class="spinner-on-load"></ion-spinner>\n <!-- <span ng-show="!loaded" class="spinner-on-load ion-load-c"></span> -->\n   <ng-transclude></ng-transclude>\n</div>\n'), 
        e.put("views/common/show-hide-password.html", '<div class="show-hide-input" ng-transclude>\n</div>\n<a class="toggle-view-anchor" on-touch="toggleType($event)">\n <span class="ion-eye-disabled" ng-show="show"></span>\n <span class="ion-eye" ng-show="!show"></span>\n</a>\n'), 
        e.put("views/app/legal/legal-notice.html", '<p class="legal-notice">\n <a ng-click="showTerms()">O que é a Nutrivirtual</a> e <a ng-click="showPrivacyPolicy()">Privacidade </a>\n</p>\n'), 
        e.put("views/app/legal/privacy-policy.html", '<ion-modal-view class="modal-view legal-view">\n          <ion-header-bar>\n                  <h1 class="title modal-title">Política de Privacidade     </h1>\n                 <a class="button button-clear" ng-click="privacy_policy_modal.hide()">       <span class="icon ion-close">       </span>     </a>\n          </ion-header-bar>\n       <ion-content class="padding">\n        <div class="row">\n            <div class="col">\n                <div class="privacy-policy">\n                               <h4 class="title">Termos de Privacidade           </h4>\n                                <p>Quando o usuário usa nossos serviços, confia a nós informações dele. Esta Política de Privacidade destina-se a ajudar o usuário a entender quais dados coletamos, por que os coletamos e o que fazemos com eles. Como sabemos que isso é importante, esperamos que o usuário tire algum tempo para lê-la com cuidado. Lembramos que é possível encontrar os controles para gerenciar informações e proteger a privacidade e segurança em Minha conta.           </p>\n                   </div>\n                              </div>\n                    </div>\n          </ion-content>\n </ion-modal-view>\n '), 
        e.put("views/app/legal/terms-of-service.html", '<ion-modal-view class="modal-view legal-view">\n   <ion-header-bar>\n                  <h1 class="title modal-title">O que é a Nutrivirtual     </h1>\n               <a class="button button-clear" ng-click="terms_of_service_modal.hide()">       <span class="icon ion-close">       </span>     </a>\n        </ion-header-bar>\n       <ion-content class="padding">\n        <div class="row">\n            <div class="col">\n                <div class="terms-of-service">\n                                   <p>Última Atualização: 07 de Novembro de 2016           </p>\n                                    <h4 class="title">Bem vindo ao aplicativo Nutrivirtual           </h4>\n                                <p>A NUTRIVIRTUAL é administrado por Carla Borba, nutricionista formada pela Universidade Federal de Pelotas - UFPEL, no ano 2003.           </p>\n                     <p>Foi criado com a intenção de proporcionar mais conforto, praticidade à todos aqueles que necessitam de um programa de reeducação alimentar,tratar ou prevenir inúmeras patologias,bem como  emagrecimento ou ganho de peso.           </p>\n                                  <p>Tratamento personalizado, feito sob medida para cada paciente, com conversas diárias para retirada de dúvidas ou com caráter motivacional,  encontro em grupo feito uma vez por semana, através de chat, troca de experiências, receitas variadas, dicas, loja com produtos indicados na dieta, curiosidades apartir de pesquisas científicas.           </p>\n                        <p>Um espaço onde você pode encontrar tudo que precisa para realizar seu tratamento sem precisar sair de casa.           </p>\n                  <p>Este aplicativo é uma extensão do site de tratamento <a href="http://www.nutrivirtual.com.br">www.nutrivirtual.com.br</a>.           </p>\n            <p>Você não esta sozinho, cadastre-se e experimente nosso método de tratamento           </p>\n                          </div>\n                              </div>\n                    </div>\n          </ion-content>\n </ion-modal-view>\n '), 
        e.put("views/app/partials/checkin_status_post.html", '<ion-modal-view class="checkin-status-post-view">\n  <ion-header-bar class="bar-positive">\n               <div class="buttons">\n     <button class="button button-clear" ng-click="closeCheckInModal()">Cancel</button>\n          </div>\n        <h1 class="title">Check In</h1>\n  </ion-header-bar>\n  <ion-content>\n    <div class="row google-search-bar">\n      <div class="col">\n        <div class="list list-inset">\n          <label class="item item-input search-box">\n            <i class="icon ion-ios-search placeholder-icon"></i>\n            <input ng-model="search.input" type="text" placeholder="Search" ng-change="getPlacePredictions(search.input)"/>\n          </label>\n        </div>\n      </div>\n    </div>\n    <div ng-show="predictions.length > 0" class="row search-results">\n      <div class="col">\n        <div class="list location-results-list">\n          <a ng-repeat="prediction in predictions" class="item item-icon-left location-item" ng-click="selectSearchResult(prediction)">\n            <i class="icon ion-location"></i>\n            <h3 class="location-name">{{prediction.terms[0].value}}</h3>\n            <span class="location-desc">{{prediction.description}}</span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div ng-hide="predictions.length > 0" class="row row-center no-results">\n      <div class="col">\n        <i class="search-hint-icon icon ion-ios-search"></i>\n        <h2 class="search-hint-text">Search to Find Places</h2>\n      </div>\n    </div>\n  </ion-content>\n</ion-modal-view>\n'), 
        e.put("views/app/partials/comments.html", '<div class="comments-list">\n <div class="people-comment row" ng-repeat="comment in current_post.comments_list">\n            <div class="col col-top col-usr-img">\n                 <!-- We need a wrapper with width set for the preload image directive -->\n                     <div class="user-image-outer">\n                                <a ng-click="navigateToUserProfile(comment.user)">\n                                    <pre-img ratio="_1_1" helper-class="square-image">\n                                            <img class="user-image" ng-src="{{ comment.user.picture }}" spinner-on-load>\n                                  </pre-img>\n                            </a>\n                  </div>\n                </div>\n                <div class="col col-top">\n                     <div class="row user-data">\n                           <div class="col">\n                                     <a class="name" ng-click="navigateToUserProfile(comment.user)">{{ comment.user.name.first }} {{ comment.user.name.last}}</a>\n                                  <p class="comment">{{ comment.text }}</p>\n                             </div>\n                        </div>\n                </div>\n        </div>\n</div>\n<div class="new-comment-outer row row-center">\n        <div class="col">\n             <div class="item item-input-inset">\n       <label class="item-input-wrapper">\n              <input type="text" placeholder="Write a comment">\n           </label>\n                  <button class="send-comment-button button button-icon icon ion-paper-airplane"></button>\n        </div>\n      </div>\n</div>\n'), 
        e.put("views/app/partials/feed-post-card.html", '<div class="card-1">\n    <div class="list card">\n        <div class="item item-image">\n            <a class="card-image-anchor" ui-sref="app.post({ postId: card.id })">\n                <pre-img ratio="_8_5" helper-class="main-image">\n                    <img ng-src="{{ card.picture }}" spinner-on-load>\n                </pre-img>\n            </a>\n        </div>\n        <div class="item item-body">\n            <a ui-sref="app.post({ postId: card.id })">\n                <h2 class="card-title">{{ card.title }}         </h2>\n            </a>\n        </div>\n        <div class="item item-avatar">\n            <div class="card-avatar-image-outer">\n                <a ui-sref="app.profile.posts({userId: card.userId})">\n                    <pre-img ratio="_1_1" helper-class="avatar-image">\n                        <img ng-src="{{ card.user.picture }}" spinner-on-load>\n                    </pre-img>\n                </a>\n            </div>\n            <a ui-sref="app.profile.posts({userId: card.userId})">\n                <h2 class="avatar-title">{{ card.user.name.first }} {{ card.user.name.last }}         </h2>\n            </a>\n            <p class="avatar-description">         <span am-time-ago="card.date">         </span>       </p>\n              <a ui-sref="app.category_feed({ categoryId: card.category.id })">\n                  <span class="card-tag post-category {{ card.category.name }}">{{ card.category.name }}         </span>\n              </a>\n        </div>\n        <div class="actions-brief">\n            <a href="#" class="subdued">{{card.likes}} Curtidas       </a>\n            <a ng-controller="CommentsCtrl" ng-click="showComments(card)" class="subdued">{{card.comments}} Comentarios       </a>\n            <a href="#" class="subdued">{{card.shares}} Compartilhamentos       </a>\n        </div>\n        <div class="item tabs tabs-icon-left">\n            <a class="tab-item" ng-class="{liked: card.liked}" href="#">\n                <i class="icon theme-icon icon-like">         </i>\n        Curtir\n            </a>\n            <a class="tab-item" ng-controller="CommentsCtrl" ng-click="showComments(card)">\n                <i class="icon theme-icon icon-bubble">         </i>\n        Comentar\n            </a>\n            <a class="tab-item" social-share share="card">\n                <i class="icon theme-icon icon-share">         </i>\n        Compartilhar\n            </a>\n        </div>\n    </div>\n </div>\n '), 
        e.put("views/app/partials/new_status_post.html", '<ion-modal-view class="new-status-post-view">\n <ion-header-bar class="bar-positive">\n <div class="buttons">\n <button class="button button-clear" ng-click="new_status_post_modal.hide()">Cancela </button>\n </div>\n <h1 class="title">Fale Conosco </h1>\n </ion-header-bar>\n <ion-content>\n <h4>AGUARDE ATUALIZAÇÕES</h4> <!-- <iframe ng-src="http://www.nutrivirtual.com.br/chat/chatAplicativo.php?nome=VisitanteNovo" style="width:100%; height: 100%;"> </iframe>\n   --> </ion-content>\n </ion-modal-view>\n'), 
        e.put("views/app/partials/profile-post-card.html", '<div class="card-7">\n  <div class="card">\n    <div class="row card-content-wrapper">\n      <div class="col col-33 image-wrapper">\n        <a class="card-image-anchor" ui-sref="app.post({ postId: post.id })">\n          <pre-img ratio="_1_1" helper-class="profile-post-image">\n            <img class="post-image" ng-src="{{post.picture}}" spinner-on-load>\n          </pre-img>\n        </a>\n      </div>\n      <div class="col card-data">\n        <a class="card-title-outer" ui-sref="app.post({ postId: post.id })">\n          <h2 class="card-title">{{post.title}}</h2>\n        </a>\n        <div class="actions-brief">\n          <a href="#" class="subdued">{{post.likes}} Likes</a>\n          <a ng-controller="CommentsCtrl" ng-click="showComments(post)" class="subdued">{{post.comments}} Comments</a>\n          <a href="#" class="subdued">{{post.shares}} Shares</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'), 
        e.put("views/app/post/details.html", '<ion-view view-title="{{post.title}}" class="post-details-view">\n  <ion-content overflow-scroll="true">\n    <div class="post-card-content">\n      <div class="item item-image">\n        <pre-img ratio="_1_1" helper-class="main-image">\n          <img ng-src="{{post.picture}}" spinner-on-load>\n        </pre-img>\n      </div>\n      <div class="item item-divider trend-callout">\n        <span class="post-trend-copy"></span>\n        <a class="trend-wrapper button button-small" ui-sref="app.trend_feed({ trendId: post.trend.id })">\n          <i class="icon ion-arrow-graph-up-right"></i>\n          <span class="post-trend">{{ post.trend.name }}</span>\n          <i class="icon ion-chevron-right"></i>\n        </a>\n      </div>\n      <div class="item item-body">\n        <h2 class="post-title">{{post.title}}</h2>\n      </div>\n      <div class="item item-avatar">\n        <div class="card-avatar-image-outer">\n          <a ui-sref="app.profile.posts({userId: post.userId})">\n            <pre-img ratio="_1_1" helper-class="avatar-image">\n              <img ng-src="{{ post.user.picture }}" spinner-on-load>\n            </pre-img>\n          </a>\n        </div>\n        <a ui-sref="app.profile.posts({userId: post.userId})">\n          <h2 class="avatar-title">{{ post.user.name.first }} {{ post.user.name.last }}</h2>\n        </a>\n        <p class="avatar-description"><span am-time-ago="post.date"></span></p>\n          <a ui-sref="app.category_feed({ categoryId: post.category.id })">\n            <span class="post-category {{ post.category.name }}">{{ post.category.name }}</span>\n          </a>\n      </div>\n      <div class="item item-body post-description-outer">\n        <p class="post-description">{{post.description}}</p>\n      </div>\n    </div>\n  </ion-content>\n  <ion-footer-bar class="bar-stable">\n    <div class="row">\n      <div class="col col-50 col-center actions-col">\n        <button class="button button-icon theme-icon icon-like"></button>\n        <button ng-controller="CommentsCtrl" class="button button-icon theme-icon icon-bubble" ng-click="showComments(post)"></button>\n        <button class="button button-icon theme-icon icon-share" social-share share="post"></button>\n      </div>\n      <div class="col col-50 col-center brief-col">\n        <div class="actions-brief">\n          <a href="#" class="subdued">{{post.likes}} Likes</a>\n          <a ng-controller="CommentsCtrl" ng-click="showComments(post)" class="subdued">{{post.comments}} Comments</a>\n        </div>\n      </div>\n    </div>\n  </ion-footer-bar>\n</ion-view>\n'), 
        e.put("views/app/profile/profile.details.html", '<ion-view class="profile-details" view-title="Profile">\n  <div class="row profile-details-section">\n    <div class="col col-center col-25">\n      <!-- We need a wrapper with width set for the preload image directive -->\n      <div class="user-image-outer">\n        <pre-img ratio="_1_1" helper-class="rounded-image">\n          <img class="user-image" ng-src="{{user.picture}}" spinner-on-load>\n        </pre-img>\n      </div>\n    </div>\n    <div class="col col-center">\n      <div class="row user-details-top">\n        <div class="col user-detail-item">\n          <b class="item-count">{{user.posts.length}}</b>\n          <span class="item-name">posts</span>\n        </div>\n        <div class="col user-detail-item">\n          <a ui-sref="app.profile.followers({userId: currentUserId})">\n            <b class="item-count">{{user.followers.length}}</b>\n            <span class="item-name">followers</span>\n          </a>\n        </div>\n        <div class="col user-detail-item">\n          <a ui-sref="app.profile.following({userId: currentUserId})">\n            <b class="item-count">{{user.following.length}}</b>\n            <span class="item-name">following</span>\n          </a>\n        </div>\n      </div>\n      <div class="row user-details-bottom" ng-if="!myProfile">\n        <div class="col user-action-outer">\n          <a class="button button-small button-block button-outline">\n            <i class="icon ion-plus-round"></i> FOLLOW\n          </a>\n        </div>\n      </div>\n      <div class="row user-details-bottom" ng-if="myProfile">\n        <div class="col user-action-outer">\n          <a class="button button-small button-block button-outline" ui-sref="app.settings">\n            <i class="icon ion-gear-a"></i> SETTINGS\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row profile-details-section">\n    <div class="col user-info">\n      <h4 class="user-name">{{user.name.first}} {{user.name.last}}</h4>\n      <p class="user-description">\n        {{user.about}}\n      </p>\n      <p class="user-contact">\n        <a ng-controller="EmailComposerCtrl" ng-click="sendMail()">\n          <i class="icon ion-email"></i> {{user.email}}\n        </a>\n      </p>\n      <p class="user-site" dynamic-anchor-fix>\n        <a ng-href="{{user.website}}">{{user.website | cleanUrl}}</a>\n      </p>\n    </div>\n  </div>\n  <div class="row profile-details-section split-actions">\n    <div class="col user-interaction">\n      <a class="user-interaction-tab button button-clear button-block" ng-class="{active: (\'app.profile.posts\' | includedByState)}" nav-transition="none" ng-click="getUserPosts()" role="tab">\n        <i class="icon ion-document-text"></i> All Posts\n      </a>\n    </div>\n    <div class="col user-interaction">\n      <a class="user-interaction-tab button button-clear button-block" ng-class="{active: (\'app.profile.pics\' | includedByState)}" nav-transition="none" ng-click="getUserPics()" role="tab">\n        <i class="icon ion-images"></i> Pics\n      </a>\n    </div>\n  </div>\n  <ion-nav-view class="profile-sub-views-outer" name="profileSubContent"></ion-nav-view>\n</ion-view>\n'), 
        e.put("views/app/profile/profile.followers.html", '<ion-view class="profile-followers profile-sub-view" view-title="Followers">\n  <ion-list class="contacts-list" can-swipe="true" delegate-handle="followers-list">\n    <ion-item class="contact-item item-avatar" ng-repeat="follower in user.followers">\n      <div class="item-content-wrapper">\n        <div class="user-image-outer">\n          <pre-img ratio="_1_1" helper-class="square-image">\n            <img class="user-image" ng-src="{{follower.userData.picture}}" spinner-on-load>\n          </pre-img>\n        </div>\n        <div class="row contact-main first-row">\n          <div class="col col-67 contact-description">\n            <a class="username" ui-sref="app.profile.posts({userId: follower.userData.id})">{{follower.userData.username}}</a>\n            <span class="name">{{follower.userData.name.first}} {{follower.userData.name.last}}</span>\n          </div>\n          <div class="col contact-actions">\n            <button ng-if="follower.follow_back" class="action-button button button-outline active button-small button-block" trigger-unfollow>\n              Following\n            </button>\n            <button ng-if="!follower.follow_back" class="action-button button button-outline button-small button-block" ng-click="follow(contact)">\n              Follow\n            </button>\n          </div>\n        </div>\n        <div class="row contact-main">\n          <div class="col contact-description">\n            <p class="about-user">{{follower.userData.about}}</p>\n          </div>\n        </div>\n      </div>\n      <ion-option-button ng-if="follower.follow_back" class="unfollow-button" ng-click="remove(contact)">Unfollow</ion-option-button>\n    </ion-item>\n  </ion-list>\n</ion-view>\n'), 
        e.put("views/app/profile/profile.following.html", '<ion-view class="profile-following profile-sub-view" view-title="Following">\n  <ion-list class="contacts-list" can-swipe="true" delegate-handle="following-list">\n    <ion-item class="contact-item item-avatar" ng-repeat="following in user.following">\n      <div class="item-content-wrapper">\n        <div class="user-image-outer">\n          <pre-img ratio="_1_1" helper-class="square-image">\n            <img class="user-image" ng-src="{{following.userData.picture}}" spinner-on-load>\n          </pre-img>\n        </div>\n        <div class="row contact-main first-row">\n          <div class="col col-67 contact-description">\n            <a class="username" ui-sref="app.profile.posts({userId: following.userData.id})">{{following.userData.username}}</a>\n            <span class="name">{{following.userData.name.first}} {{following.userData.name.last}}</span>\n          </div>\n          <div class="col contact-actions">\n            <button class="action-button button button-outline active button-small button-block" trigger-unfollow>\n              Following\n            </button>\n          </div>\n        </div>\n        <div class="row contact-main">\n          <div class="col contact-description">\n            <p class="about-user">{{following.userData.about}}</p>\n          </div>\n        </div>\n      </div>\n      <ion-option-button class="unfollow-button" ng-click="remove(contact)">Unfollow</ion-option-button>\n    </ion-item>\n  </ion-list>\n</ion-view>\n'), 
        e.put("views/app/profile/profile.html", '<ion-view class="profile-view" cache-view="false" view-title="Profile">\n  <!-- <ion-content has-bouncing=\'false\' class="profile-content" delegate-handle="profile-scroll"> -->\n  <ion-content class="profile-content" delegate-handle="profile-scroll">\n    <!-- <ion-nav-view class="profile-sub-views-outer" name="profileContent"></ion-nav-view> -->\n    <ion-nav-view class="profile-details-outer" name="profileContent"></ion-nav-view>\n  </ion-content>\n</ion-view>\n'), 
        e.put("views/app/profile/profile.pics.html", '<ion-view class="profile-pics profile-sub-view" view-title="Profile">\n  <div class="row gellery-outer">\n    <div ng-repeat="picture in user.pictures" class="col col-33 gallery-item-outer">\n      <pre-img ratio="_1_1" helper-class="">\n        <img class="main-image" ng-src="{{picture.picture}}" spinner-on-load>\n      </pre-img>\n    </div>\n  </div>\n</ion-view>\n'),
        e.put("views/app/profile/profile.posts.html", '<ion-view class="profile-posts profile-sub-view" view-title="Profile">\n  <div ng-repeat="post in user.posts" class="profile-post-item">\n    <section ng-include="\'views/app/partials/profile-post-card.html\'" class="post-card-outer"></section>\n  </div>\n</ion-view>\n'), 
        e.put("views/app/profile/settings.html", '<ion-view view-title="Settings" class="settings-view">\n  <ion-content>\n    <div class="list">\n      <div class="item item-divider title">\n        Account\n      </div>\n      <a class="item settings-option">\n        Edit Profile\n        <span class="item-note">\n          <i class="icon ion-ios-arrow-right"></i>\n        </span>\n      </a>\n      <a class="item settings-option">\n        Change Password\n        <span class="item-note">\n          <i class="icon ion-ios-arrow-right"></i>\n        </span>\n      </a>\n      <div class="item item-divider title">\n        More\n      </div>\n      <a class="item settings-option" ng-click="showTerms()">\n        <!-- <i class="icon ion-ios-information-outline"></i> -->\n       Termos de Serviço\n      </a>\n      <a class="item settings-option" ng-click="showPrivacyPolicy()">\n        <!-- <i class="icon ion-ios-locked-outline"></i> -->\n        Privacy Policy\n      </a>\n      <a class="item settings-option">\n        <!-- <i class="icon ion-ios-help-outline"></i> -->\n        Help\n      </a>\n      <a class="item settings-option" ng-controller="AppRateCtrl" ng-click="appRate()">\n        <!-- <i class="icon ion-ios-star-half"></i> -->\n        App Rate\n      </a>\n      <a class="item settings-option" ui-sref="facebook-sign-in">\n        <!-- <i class="icon ion-ios-close-outline"></i> -->\n        Sign Out\n      </a>\n    </div>\n  </ion-content>\n</ion-view>\n')
}]);