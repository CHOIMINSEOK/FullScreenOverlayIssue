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

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let appManager = RNAppManager()
        
        let url: (() -> URL?) = {
            #if DEBUG
                return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
            #else
                return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
            #endif
        }
        
        let rootView = appManager.createRootView(
            url: url,
            moduleName: "HelloWorld"
        )

        self.view.addSubview(rootView)
        
        rootView.translatesAutoresizingMaskIntoConstraints = false
         NSLayoutConstraint.activate([
            rootView.leadingAnchor.constraint(equalTo: self.view.leadingAnchor),
            rootView.trailingAnchor.constraint(equalTo: self.view.trailingAnchor),
            rootView.topAnchor.constraint(equalTo: self.view.topAnchor),
            rootView.bottomAnchor.constraint(equalTo: self.view.bottomAnchor)
         ])
    }


}

