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
    static func getOSVersion() -> String {
        return UIDevice.current.systemVersion
    }
}
