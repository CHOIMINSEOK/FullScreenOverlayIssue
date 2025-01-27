//
//  RNAppManager.m
//  RNModalIssueApp
//
//  Created by cms3718 on 1/26/25.
//

#import "RCTRootViewFactory.h"
#import <ReactCommon/RCTTurboModuleManager.h>
#import "React/CoreModulesPlugins.h"
#import <ReactCommon/RCTHost.h>
#import "RCTAppSetupUtils.h"
#import <Foundation/Foundation.h>
#import "RNAppManager.h"

@interface _RNAppManager : NSObject<RCTTurboModuleManagerDelegate, RCTHostDelegate>
@property RCTHost* reactHost;
@property RCTRootViewFactory* factory;

+ (instancetype)shared;
- (RCTRootViewFactory *)create:(RCTRootViewFactoryConfiguration *)configuration;

@end


@implementation _RNAppManager
+ (instancetype)shared {
    static _RNAppManager *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];
    });
    return sharedInstance;
}

- (RCTRootViewFactory *)create:(RCTRootViewFactoryConfiguration *)configuration {
    RCTRootViewFactory * factory = [[RCTRootViewFactory alloc]
                                    initWithTurboModuleDelegate:self
                                    hostDelegate:self
                                    configuration:configuration];
    self.factory = factory;
    return factory;
}

#pragma mark - RCTHostDelegate

- (void)host:(nonnull RCTHost *)host didReceiveJSErrorStack:(nonnull NSArray<NSDictionary<NSString *,id> *> *)stack message:(nonnull NSString *)message exceptionId:(NSUInteger)exceptionId isFatal:(BOOL)isFatal {
}

- (void)hostDidStart:(nonnull RCTHost *)host {
    _reactHost = host;
}

#pragma mark - RCTTurboModuleManagerDelegate

- (Class)getModuleClassFromName:(const char *)name {
    return RCTCoreModulesClassProvider(name);
}

- (id<RCTTurboModule>)getModuleInstanceFromClass:(Class)moduleClass {
    return RCTAppSetupDefaultModuleFromClass(moduleClass);
}

@end


@implementation RNAppManager

+ (instancetype)shared {
    static RNAppManager *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];
    });
    return sharedInstance;
}


- (UIView * _Nonnull)createRootViewWithUrl:(NSURL * _Nullable (^ _Nonnull)())url moduleName:(NSString * _Nonnull)moduleName {
    RCTRootViewFactoryConfiguration *configuration =
        [[RCTRootViewFactoryConfiguration alloc] initWithBundleURLBlock:url
                                                         newArchEnabled:YES
                                                     turboModuleEnabled:YES
                                                      bridgelessEnabled:YES];
    RCTRootViewFactory *factory = [[_RNAppManager shared] create:configuration];
    UIView *rootView = [factory viewWithModuleName:moduleName initialProperties:nil launchOptions: nil];
    return rootView;
}


- (RCTRootViewFactory * _Nonnull)createWithConfiguration:(RCTRootViewFactoryConfiguration * _Nonnull)configuration {
    _RNAppManager *manager = [_RNAppManager shared];
    return [manager create:configuration];
}



@end
