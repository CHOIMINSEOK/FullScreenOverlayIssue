//
//  RNAppManager.h
//  RNModalIssueApp
//
//  Created by cms3718 on 1/26/25.
//

#ifndef RNAppManager_h
#define RNAppManager_h


#endif /* RNAppManager_h */

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>


@interface RNAppManager: NSObject
- (UIView * _Nonnull)createRootViewWithUrl:(NSURL * _Nullable (^ _Nonnull)())url moduleName:(NSString * _Nonnull)moduleName;

@end
