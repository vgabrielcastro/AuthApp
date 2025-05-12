//
//  OSVersionModule.swift
//  AuthNative
//
//  Created by vinicius gabriel on 11/05/25.
//

import Foundation
import UIKit

@objc(OSVersionModule)
class OSVersionModule: NSObject {


    @objc
    func getOSVersion(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let version = UIDevice.current.systemVersion
        resolve(version)
    }
}
