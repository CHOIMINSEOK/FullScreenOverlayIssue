//
//  ViewController.swift
//  RNModalIssueApp
//
//  Created by cms3718 on 1/21/25.
//

import UIKit
import React
import React_RCTAppDelegate

class ViewController: UIViewController {
    var reactNativeFactory: RCTReactNativeFactory?
    var reactNativeDelegate: ReactNativeDelegate?

    override func viewDidLoad() {
        super.viewDidLoad()

        reactNativeDelegate = ReactNativeDelegate()
        reactNativeFactory = RCTReactNativeFactory(delegate: reactNativeDelegate!)
        view = reactNativeFactory?.rootViewFactory.view(withModuleName: "HelloWorld")
    }
}


class ReactNativeDelegate: RCTDefaultReactNativeFactoryDelegate {

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
    #if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
    #else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
    #endif
  }
}
