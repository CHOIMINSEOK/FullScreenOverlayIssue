//
//  ViewController.swift
//  RNModalIssueApp
//
//  Created by cms3718 on 1/21/25.
//

import UIKit
import React_RCTAppDelegate

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        let factory = (RCTSharedApplication()?.delegate as? RCTAppDelegate)?.rootViewFactory
        self.view = factory?.view(withModuleName: "HelloWorld")
    }


}

